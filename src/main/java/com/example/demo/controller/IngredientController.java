package com.example.demo.controller;


import com.example.demo.domain.dto.ArticleRequestDto;
import com.example.demo.domain.models.Article;
import com.example.demo.service.ArticleService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class IngredientController {

    private final ArticleService articleService;

    @GetMapping("/article/findAll") 
    // Returns everything in table
    List<Article> findAll(){
        return articleService.getAllArticles();
    }

    @PostMapping("/article/add")
    // adds DTO object
    public ResponseEntity<String> addArticle(@RequestBody ArticleRequestDto articleDTO){
        return ResponseEntity.ok(articleService.addArticle(articleDTO));
    }
    
    @PutMapping("/article/{id}")
    //Updates entity with matching id
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody ArticleRequestDto articleDTO){
        return ResponseEntity.status(HttpStatus.OK).body(articleService.update(id, articleDTO));
    }

    @DeleteMapping("/article/{id}")
    // Deletes entity with matching id
    public ResponseEntity<?> delete(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(articleService.delete(id));
    }
}
