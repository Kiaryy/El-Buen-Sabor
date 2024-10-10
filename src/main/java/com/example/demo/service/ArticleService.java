package com.example.demo.service;

import com.example.demo.domain.dto.ArticleRequestDto;
import com.example.demo.domain.models.Article;
import com.example.demo.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleService{

    @Autowired
    public ArticleRepository articleInsumoRepository;

    public List<Article> getAllArticles() {
        return articleInsumoRepository.findAll();
    }

    public String addArticle(ArticleRequestDto articleRequestDTO){


        Article article = Article.builder()
                .name(articleRequestDTO.name())
                .denominacion(articleRequestDTO.denominacion())
                .category(articleRequestDTO.category())
                .provider(articleRequestDTO.provider())
                .priceUnit(articleRequestDTO.priceUnit())
                .precioCompra(articleRequestDTO.precioCompra())
                .stockActual(articleRequestDTO.stockActual())
                .existencies(articleRequestDTO.existencies())
                .lastPurchased(articleRequestDTO.lastPurchased())
                .build();
        // Here we save in dataBase
        articleInsumoRepository.save(article);
        return "Article Added";
    }

    public Article update(Long id, ArticleRequestDto entity){
        Optional<Article> entityOptional = articleInsumoRepository.findById(id);
        Article article = entityOptional.get();
        // We convert the DTO entity to an object
        Article updatedArticle = Article.builder()
                .name(entity.name())
                .denominacion(entity.denominacion())
                .category(entity.category())
                .provider(entity.provider())
                .priceUnit(entity.priceUnit())
                .precioCompra(entity.precioCompra())
                .stockActual(entity.stockActual())
                .existencies(entity.existencies())
                .lastPurchased(LocalDate.now())
                .build();
        // Saves updated entity to database
        article = articleInsumoRepository.save(updatedArticle);
        return article;
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
