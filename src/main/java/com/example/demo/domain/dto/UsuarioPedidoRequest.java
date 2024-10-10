package com.example.demo.domain.dto;

import lombok.Data;

import java.util.List;

@Data
public class UsuarioPedidoRequest {
    private Long userId;
    private String deliveryName;
    private List<PlatoRequestDTO> productos;
}
