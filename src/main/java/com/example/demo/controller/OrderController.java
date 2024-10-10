package com.example.demo.controller;

import com.example.demo.domain.dto.OrderRequestDto;
import com.example.demo.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

    private OrderService orderService;
    @PostMapping("/realizarPedido")
    public ResponseEntity<String> realizarPedido(@RequestBody OrderRequestDto pedidoRequest ){
        return ResponseEntity.ok(orderService.realizarPedido(pedidoRequest));
    }

}
