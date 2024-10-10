package com.example.demo.domain.models;

import com.example.demo.domain.models.enums.FoodType;
import jakarta.persistence.*;
import lombok.*;

//With Lombok
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long platoId;

    @Column(columnDefinition = "varchar(100)")
    private String name;

    @Column(columnDefinition = "varchar(600)")
    private String description;
    private FoodType type;
    private Double price;
    private int stock;
    private boolean available;
    @Column(columnDefinition = "varchar(600)")
    private String img;
}
