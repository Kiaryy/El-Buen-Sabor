package com.example.demo.domain.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderRequestDto {
    private Long userId;
    private String deliveryName;
    private List<ProductRequestDto> productos;
}
