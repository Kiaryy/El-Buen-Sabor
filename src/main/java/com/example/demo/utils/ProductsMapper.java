package com.example.demo.utils;

import com.example.demo.domain.dto.ProductRequestDto;
import com.example.demo.domain.models.Product;
import lombok.experimental.UtilityClass;

import java.util.List;

@UtilityClass
public class ProductsMapper {

    public Product mapDtoToEntity(ProductRequestDto product){
        return Product.builder()
                .name(product.name())
                .price(product.price())
                .description(product.description())
                .build();
    }

    public List<Product> mapListDtoToEntity(List<ProductRequestDto> products){
        return products.stream().map(ProductsMapper::mapDtoToEntity).toList() ;
    }



}
