package com.example.demo.domain.models;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "order")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pedidoId;

    private String productos;
    private String nombreDelivery;

    @ManyToOne
    @JoinColumn(name= "user_id", nullable = false)
    private Usuario user;
}
