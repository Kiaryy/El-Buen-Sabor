package com.example.demo.models;

import com.example.demo.models.enums.Tipo;
import jakarta.persistence.*;
import lombok.*;

//With Lombok
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlatoJpa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long platoId;

    @Column(columnDefinition = "varchar(100)")
    private String name;

    @Column(columnDefinition = "varchar(600)")
    private String description;
    private Tipo type;
    private Double price;
    private int stock;
    private boolean available;
    @Column(columnDefinition = "varchar(600)")
    private String img;
}
