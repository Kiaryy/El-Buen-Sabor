package com.example.demo.service;

import com.example.demo.domain.dto.ProductRequestDto;
import com.example.demo.domain.dto.OrderRequestDto;
import com.example.demo.domain.models.Orders;
import com.example.demo.domain.models.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.utils.ProductsMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Log4j2
public class OrderService {
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(UserRepository userRepository, ProductRepository productRepository, OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    public String placeOrder(OrderRequestDto request) {
        log.info(request);
        Optional<User> userOpt =  userRepository.findById(request.getUserId());
        
        if(userOpt.isEmpty()){
            throw new RuntimeException("El usuario no existe");
        }

        User user = userOpt.get();

        //Verifica si el plato existe en la base de datos
        for (ProductRequestDto product : request.getProductos()){
            if(!productRepository.existsByNameAndAvailable(product.name(), true)){
                throw new RuntimeException("El plato con el nombre: "+product.name()+" no existe!");
            }
        }

        orderRepository.save(Orders.builder()
                .deliveryName(request.getDeliveryName())
                .products(ProductsMapper.mapListDtoToEntity(request.getProductos()))
                .user(user)
                .build() ) ;

        return "Orders realizado con exito";
    }

}

