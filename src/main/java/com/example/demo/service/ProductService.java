package com.example.demo.service;

import com.example.demo.domain.dto.ProductRequestDto;
import com.example.demo.domain.models.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ProductService {

    private final ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository productRepository) {

        this.productRepository = productRepository;
    }

    //JPA repository

    public List<Product> getAllPlatos() {
        return productRepository.findAll();
    }

    public Product findById(Long id){
        Optional<Product> entityOptional = productRepository.findById(id);
        return entityOptional.get();
    }

    public String addPlatos(ProductRequestDto platoDTO){


        Product plato = Product.builder()
                .name(platoDTO.name())
                .description(platoDTO.description())
                .price(platoDTO.price())
                .type(platoDTO.type())
                .stock(platoDTO.stock())
                .available(true)
                .img(platoDTO.img())
                .build();
        // Here we save in dataBase
        productRepository.save(plato);
        return "Plato agregado";
    }

    public Product update(Long id, ProductRequestDto entity){
        Optional<Product> entityOptional = productRepository.findById(id);
        Product plato = entityOptional.get();
        // We convert the DTO entity to an object
        Product platoActualizado = Product.builder()
                .platoId(id)
                .name(entity.name())
                .description(entity.description())
                .price(entity.price())
                .type(entity.type())
                .stock(entity.stock())
                .available(true)
                .img(entity.img())
                .build();
        // Saves updated entity to database
        plato = productRepository.save(platoActualizado);
        return plato;
    }
    public boolean delete(Long id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
