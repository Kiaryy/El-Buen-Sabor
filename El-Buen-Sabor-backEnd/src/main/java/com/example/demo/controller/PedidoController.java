package com.example.demo.controller;

import com.example.demo.DTO.request.UsuarioPedidoRequest;
import com.example.demo.service.PedidoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pedido")
@AllArgsConstructor
public class PedidoController {

    private PedidoService pedidoService;
    @PostMapping("/realizarPedido")
    public ResponseEntity<String> realizarPedido(@RequestBody UsuarioPedidoRequest pedidoRequest ){
        return ResponseEntity.ok(pedidoService.realizarPedido(pedidoRequest));
    }

}
