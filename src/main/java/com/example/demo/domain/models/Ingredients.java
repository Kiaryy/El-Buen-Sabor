package com.example.demo.domain.models;

import java.time.LocalDate;

import com.example.demo.domain.models.enums.IngredientCategory;
import com.example.demo.domain.models.enums.Providers;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Ingredients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;
    private String name;
    private IngredientCategory category;
    private String denominacion; // ??
    private Providers provider;
    private Double price;
    private Double providerPrice;
    private int stock;
    private int existencies; // ??
    private LocalDate lastPurchased;
}
