package com.example.demo.service;

import com.example.demo.domain.dto.ProductRequestDto;
import com.example.demo.domain.dto.OrderRequestDto;
import com.example.demo.domain.models.Order;
import com.example.demo.domain.models.Product;
import com.example.demo.domain.models.Usuario;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.StringJoiner;

@Service
@AllArgsConstructor
@Log4j2
public class OrderService {
    private UserRepository userRepository;
    private ProductRepository productRepository;

    public String realizarPedido(OrderRequestDto request) {
        log.info(request);
        Optional<Usuario> userOpt =  userRepository.findById(request.getUserId());

        if(userOpt.isEmpty()){
            throw new RuntimeException("El usuario no existe");
        }

        //Verifica si el plato existe en la base de datos
        for (ProductRequestDto requestDTO : request.getProductos()){
            if(!productRepository.existsByName(requestDTO.name())){
                throw new RuntimeException("El plato con el nombre: "+requestDTO.name()+" no existe!");
            }
        }

        List<Product> product = productRepository.findAll();
        // Descontando stock en la entidad platos y posteriormente guarda con el stock reducido
        for (ProductRequestDto platoUser : request.getProductos()){

            product.forEach(platoEntity -> {
                if(platoEntity.getName().equalsIgnoreCase(platoUser.name()) && platoEntity.getStock() > 0 ){
                    platoEntity.setStock(platoEntity.getStock() -1);
                    productRepository.save(platoEntity);
                }
                platoEntity.setAvailable(false);
            });
        }

        Usuario user = userOpt.get();
        Order order = Order.builder()
                .nombreDelivery(request.getDeliveryName())
                .productos(listToString(request.getProductos()," "))
                .user(user)
                .build();

        user.getOrder().add(order);

        log.info("Order: ", order);
        log.info("User: ",user);

        userRepository.save(user);

        return "Order realizado con exito";
    }
    public static String listToString(List<ProductRequestDto> list, String delimiter) {
        StringJoiner joiner = new StringJoiner(delimiter);
        for (ProductRequestDto item : list) {
            joiner.add(item.name());
            joiner.add("Description:");
            joiner.add(item.type().toString());
        }
        return joiner.toString();
    }
}

