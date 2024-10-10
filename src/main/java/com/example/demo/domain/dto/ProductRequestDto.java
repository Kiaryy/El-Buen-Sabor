package com.example.demo.domain.dto;

import com.example.demo.domain.models.enums.FoodType;

public record ProductRequestDto(
        String name,
        String description,
        FoodType foodType,
        Double price,
        int stock,
        String img
) {
}
