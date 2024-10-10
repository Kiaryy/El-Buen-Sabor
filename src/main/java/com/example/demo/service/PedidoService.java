package com.example.demo.service;

import com.example.demo.domain.dto.PlatoRequestDto;
import com.example.demo.domain.dto.PedidoRequestDto;
import com.example.demo.domain.models.Pedido;
import com.example.demo.domain.models.PlatoJpa;
import com.example.demo.domain.models.Usuario;
import com.example.demo.repository.PlatoRepository;
import com.example.demo.repository.UsuarioRepository;
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
    private UsuarioRepository usuarioRepository;
    private PlatoRepository platoRepository;

    public String realizarPedido(PedidoRequestDto request) {
        log.info(request);
        Optional<Usuario> userOpt =  usuarioRepository.findById(request.getUserId());

        if(userOpt.isEmpty()){
            throw new RuntimeException("El usuario no existe");
        }

        //Verifica si el plato existe en la base de datos
        for (PlatoRequestDto requestDTO : request.getProductos()){
            if(!platoRepository.existsByName(requestDTO.name())){
                throw new RuntimeException("El plato con el nombre: "+requestDTO.name()+" no existe!");
            }
        }

        List<PlatoJpa> platoJpa = platoRepository.findAll();
        // Descontando stock en la entidad platos y posteriormente guarda con el stock reducido
        for (PlatoRequestDto platoUser : request.getProductos()){

            platoJpa.forEach(platoEntity -> {
                if(platoEntity.getName().equalsIgnoreCase(platoUser.name()) && platoEntity.getStock() > 0 ){
                    platoEntity.setStock(platoEntity.getStock() -1);
                    platoRepository.save(platoEntity);
                }
                platoEntity.setAvailable(false);
            });
        }

        Usuario user = userOpt.get();
        Pedido pedido = Pedido.builder()
                .nombreDelivery(request.getDeliveryName())
                .productos(listToString(request.getProductos()," "))
                .user(user)
                .build();

        user.getPedido().add(pedido);

        log.info("Pedido: ",pedido);
        log.info("User: ",user);

        usuarioRepository.save(user);

        return "Pedido realizado con exito";
    }
    public static String listToString(List<PlatoRequestDto> list, String delimiter) {
        StringJoiner joiner = new StringJoiner(delimiter);
        for (PlatoRequestDto item : list) {
            joiner.add(item.name());
            joiner.add("Description:");
            joiner.add(item.type().toString());
        }
        return joiner.toString();
    }
}

