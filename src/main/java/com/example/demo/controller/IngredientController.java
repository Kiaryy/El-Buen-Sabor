package com.example.demo.controller;


import com.example.demo.domain.dto.IngredientRequestDto;
import com.example.demo.domain.models.Ingredients;
import com.example.demo.service.IngredientService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class IngredientController {

    private final IngredientService ingredientService;

    @GetMapping("/article/findAll") 
    // Returns everything in table
    List<Ingredients> findAll(){
        return ingredientService.getAllArticles();
    }

    @PostMapping("/article/add")
    // adds DTO object
    public ResponseEntity<String> addArticle(@RequestBody IngredientRequestDto articleDTO){
        return ResponseEntity.ok(ingredientService.addArticle(articleDTO));
    }
    
    @PutMapping("/article/{id}")
    //Updates entity with matching id
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody IngredientRequestDto articleDTO){
        return ResponseEntity.status(HttpStatus.OK).body(ingredientService.update(id, articleDTO));
    }

    @DeleteMapping("/article/{id}")
    // Deletes entity with matching id
    public ResponseEntity<?> delete(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(ingredientService.delete(id));
    }
}
