package com.example.demo.domain.dto;

import com.example.demo.domain.models.enums.Tipo;

public record PlatoRequestDto(
        String name,
        String description,
        Tipo type,
        Double price,
        int stock,
        String img
) {
}
