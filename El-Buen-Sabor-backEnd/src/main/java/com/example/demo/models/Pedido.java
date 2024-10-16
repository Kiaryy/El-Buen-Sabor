package com.example.demo.models;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "pedido")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pedidoId;
    //private List<PlatoJpa> productos;
    private String productos;
    private String nombreDelivery;
    // private String idDelivery;

    @ManyToOne
    @JoinColumn(name= "user_id", nullable = false)
    private UsuarioJpa user;
}
