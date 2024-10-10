package com.example.demo.controller;

import com.example.demo.domain.dto.ProductRequestDto;
import com.example.demo.domain.models.Product;
import com.example.demo.service.ProductService;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/platos/findAll") 
    List<Product> findAll(){
        return productService.getAllPlatos();
    }

    @PostMapping("/platos/add")
    public ResponseEntity<String> addPlatos(@RequestBody ProductRequestDto platoDTO){
        return ResponseEntity.ok(productService.addPlatos(platoDTO));
    }
    
    @PutMapping("/platos/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody ProductRequestDto platoDTO){
        return ResponseEntity.status(HttpStatus.OK).body(productService.update(id, platoDTO));
    }

    @DeleteMapping("/platos/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(productService.delete(id));
    }
}
