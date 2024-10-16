package com.example.demo.service;

import com.example.demo.DTO.request.PlatoRequestDTO;
import com.example.demo.DTO.request.UsuarioPedidoRequest;
import com.example.demo.models.Pedido;
import com.example.demo.models.PlatoJpa;
import com.example.demo.models.UsuarioJpa;
import com.example.demo.repository.PlatoJpaRepository;
import com.example.demo.repository.UsuarioJpaRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.StringJoiner;

@Service
@AllArgsConstructor
@Log4j2
public class PedidoService {
    private UsuarioJpaRepository usuarioJpaRepository;
    private PlatoJpaRepository platoJpaRepository;

    public String realizarPedido(UsuarioPedidoRequest request) {
        log.info(request);
        Optional<UsuarioJpa> userOpt =  usuarioJpaRepository.findById(request.getUserId());

        if(userOpt.isEmpty()){
            throw new RuntimeException("El usuario no existe");
        }

        //Verifica si el plato existe en la base de datos
        for (PlatoRequestDTO requestDTO : request.getProductos()){
            if(!platoJpaRepository.existsByName(requestDTO.name())){
                throw new RuntimeException("El plato con el nombre: "+requestDTO.name()+" no existe!");
            }
        }

        List<PlatoJpa> platoJpa = platoJpaRepository.findAll();
        // Descontando stock en la entidad platos y posteriormente guarda con el stock reducido
        for (PlatoRequestDTO platoUser : request.getProductos()){

            platoJpa.forEach(platoEntity -> {
                if(platoEntity.getName().equalsIgnoreCase(platoUser.name()) && platoEntity.getStock() > 0 ){
                    platoEntity.setStock(platoEntity.getStock() -1);
                    platoJpaRepository.save(platoEntity);
                }
                platoEntity.setAvailable(false);
            });
        }

        UsuarioJpa user = userOpt.get();
        Pedido pedido = Pedido.builder()
                .nombreDelivery(request.getDeliveryName())
                .productos(listToString(request.getProductos()," "))
                .user(user)
                .build();

        user.getPedido().add(pedido);

        log.info("Pedido: ",pedido);
        log.info("User: ",user);

        usuarioJpaRepository.save(user);

        return "Pedido realizado con exito";
    }
    public static String listToString(List<PlatoRequestDTO> list, String delimiter) {
        StringJoiner joiner = new StringJoiner(delimiter);
        for (PlatoRequestDTO item : list) {
            joiner.add(item.name());
            joiner.add("Description:");
            joiner.add(item.type().toString());
        }
        return joiner.toString();
    }
}

