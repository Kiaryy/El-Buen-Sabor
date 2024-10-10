package com.example.demo.domain.dto;

import lombok.Data;

import java.util.List;

@Data
public class PedidoRequestDto {
    private Long userId;
    private String deliveryName;
    private List<PlatoRequestDto> productos;
}
