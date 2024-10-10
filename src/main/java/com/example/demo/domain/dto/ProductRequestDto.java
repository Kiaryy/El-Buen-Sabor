package com.example.demo.domain.dto;

import com.example.demo.domain.models.enums.FoodType;

public record ProductRequestDto(
        String name,
        String description,
        FoodType type,
        Double price,
        int stock,
        String img
) {
}
