package com.example.demo.models;

import java.time.LocalDate;

import com.example.demo.models.enums.ArticleCategory;
import com.example.demo.models.enums.Providers;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ArticleJpa{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;

    private String name;
    private ArticleCategory category; 
    private Providers provider;
    private Double priceUnit;
    private Double precioCompra;
    private int stockActual;
    private int existencies;
    private LocalDate lastPurchased;
}
