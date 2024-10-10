package com.example.demo.domain.dto;

import java.time.LocalDate;

import com.example.demo.domain.models.enums.IngredientCategory;
import com.example.demo.domain.models.enums.Providers;

public record IngredientRequestDto(
        String name,
        String denominacion,
        IngredientCategory category,
        Providers provider,
        Double priceUnit,
        Double precioCompra,
        int stockActual,
        int existencies,
        LocalDate lastPurchased
) {
}
