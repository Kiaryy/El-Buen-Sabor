package com.example.demo.domain.dto;

import java.time.LocalDate;

import com.example.demo.domain.models.enums.ArticleCategory;
import com.example.demo.domain.models.enums.Providers;

public record ArticleRequestDto(
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
