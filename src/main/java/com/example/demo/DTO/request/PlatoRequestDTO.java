package com.example.demo.DTO.request;

import com.example.demo.models.enums.Tipo;

public record PlatoRequestDTO(
        String name,
        String description,
        Tipo type,
        Double price,
        int stock,
        String img
) {
}
