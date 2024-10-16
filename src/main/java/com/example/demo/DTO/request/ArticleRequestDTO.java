package com.example.demo.DTO.request;

import java.time.LocalDate;

import com.example.demo.models.enums.ArticleCategory;
import com.example.demo.models.enums.Providers;

public record ArticleRequestDTO(
        String name,
        String denominacion,
        ArticleCategory category,
        Providers provider,
        Double priceUnit,
        Double precioCompra,
        int stockActual,
        int existencies,
        LocalDate lastPurchased
) {
}
