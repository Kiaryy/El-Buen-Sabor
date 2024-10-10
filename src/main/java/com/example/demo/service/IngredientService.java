package com.example.demo.service;

import com.example.demo.domain.dto.IngredientRequestDto;
import com.example.demo.domain.models.Ingredients;
import com.example.demo.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class IngredientService {

    public IngredientRepository articleInsumoRepository;

    @Autowired
    public List<Ingredients> getAllArticles() {
        return articleInsumoRepository.findAll();
    }

    public String addArticle(IngredientRequestDto ingredientRequestDTO){


        Ingredients ingredients = Ingredients.builder()
                .name(ingredientRequestDTO.name())
                .denominacion(ingredientRequestDTO.denominacion())
                .category(ingredientRequestDTO.category())
                .provider(ingredientRequestDTO.provider())
                .price(ingredientRequestDTO.priceUnit())
                .providerPrice(ingredientRequestDTO.precioCompra())
                .stock(ingredientRequestDTO.stockActual())
                .existencies(ingredientRequestDTO.existencies())
                .lastPurchased(ingredientRequestDTO.lastPurchased())
                .build();
        // Here we save in dataBase
        articleInsumoRepository.save(ingredients);
        return "Ingredients Added";
    }

    public Ingredients update(Long id, IngredientRequestDto entity){
        Optional<Ingredients> entityOptional = articleInsumoRepository.findById(id);
        Ingredients ingredients = entityOptional.get();
        // We convert the DTO entity to an object
        Ingredients updatedIngredients = Ingredients.builder()
                .name(entity.name())
                .denominacion(entity.denominacion())
                .category(entity.category())
                .provider(entity.provider())
                .price(entity.priceUnit())
                .providerPrice(entity.precioCompra())
                .stock(entity.stockActual())
                .existencies(entity.existencies())
                .lastPurchased(LocalDate.now())
                .build();
        // Saves updated entity to database
        ingredients = articleInsumoRepository.save(updatedIngredients);
        return ingredients;
    }

    public boolean delete(Long id){
        if(articleInsumoRepository.existsById(id)){
            articleInsumoRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
