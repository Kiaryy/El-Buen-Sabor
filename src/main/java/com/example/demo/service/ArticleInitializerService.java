package com.example.demo.service;

import com.example.demo.models.ArticleJpa;
import com.example.demo.models.enums.ArticleCategory;
import com.example.demo.models.enums.Providers;
import com.example.demo.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleInitializerService {

    private final ArticleRepository repository;

    public ArticleInitializerService(ArticleRepository repository) {
        this.repository = repository;
    }

    public String deleteArticle() {
        List <ArticleJpa> all= repository.findAll();
        repository.deleteAll(all);
        return "All articles deleted";
    }

    public List<ArticleJpa> loadArticles() {
        List <ArticleJpa> articles = new ArrayList<>();

        //           --------------------- Vegetales ---------------------//
        articles.add(ArticleJpa.builder()
                .name("Lechuga")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(200.0)
                .precioCompra(400.0)
                .stockActual(500)
                .existencies(250)
                .lastPurchased(LocalDate.of(2004, 9, 29))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Tomate")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(150.0)
                .precioCompra(350.0)
                .stockActual(600)
                .existencies(300)
                .lastPurchased(LocalDate.of(2024, 10, 1))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Zanahoria")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(180.0)
                .precioCompra(320.0)
                .stockActual(550)
                .existencies(275)
                .lastPurchased(LocalDate.of(2024, 9, 30))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Cebolla")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(150.0)
                .precioCompra(300.0)
                .stockActual(432)
                .existencies(155)
                .lastPurchased(LocalDate.of(2024, 9, 30))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Pimiento Rojo")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(100.0)
                .precioCompra(210.0)
                .stockActual(530)
                .existencies(260)
                .lastPurchased(LocalDate.of(2024, 3, 10))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Choclo")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(240.5)
                .precioCompra(540.5)
                .stockActual(210)
                .existencies(100)
                .lastPurchased(LocalDate.of(2024, 6, 15))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Pepino")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(200.0)
                .precioCompra(350.0)
                .stockActual(500)
                .existencies(320)
                .lastPurchased(LocalDate.of(2024, 4, 12))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Medallon de hamburguesa Vegetariana")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(400.0)
                .precioCompra(650.0)
                .stockActual(200)
                .existencies(120)
                .lastPurchased(LocalDate.of(2024, 3, 20))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Papas")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(300.0)
                .precioCompra(420.0)
                .stockActual(700)
                .existencies(540)
                .lastPurchased(LocalDate.of(2024, 5, 31))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Aguacate")
                .category(ArticleCategory.VEGETABLE)
                .provider(Providers.YAGUAR)
                .priceUnit(400.0)
                .precioCompra(650.0)
                .stockActual(320)
                .existencies(110)
                .lastPurchased(LocalDate.of(2024, 4, 12))
                .build());

        //           --------------------- Legumbres ---------------------
        articles.add(ArticleJpa.builder()
                .name("Frijoles")
                .category(ArticleCategory.LEGUMES)
                .provider(Providers.YAGUAR)
                .priceUnit(140.0)
                .precioCompra(250.0)
                .stockActual(500)
                .existencies(270)
                .lastPurchased(LocalDate.of(2024, 7, 14))
                .build());

        //           --------------------- Frutas ---------------------
        articles.add(ArticleJpa.builder()
                .name("Anana")
                .category(ArticleCategory.FRUITS)
                .provider(Providers.YAGUAR)
                .priceUnit(140.0)
                .precioCompra(200.5)
                .stockActual(150)
                .existencies(77)
                .lastPurchased(LocalDate.of(2024, 2, 18))
                .build());

        //           --------------------- Hongos ---------------------
        articles.add(ArticleJpa.builder()
                .name("Champiñones")
                .category(ArticleCategory.FUNGUS)
                .provider(Providers.YAGUAR)
                .priceUnit(160.0)
                .precioCompra(230.0)
                .stockActual(120)
                .existencies(66)
                .lastPurchased(LocalDate.of(2024, 5, 21))
                .build());

        //           --------------------- Horneado ---------------------
        articles.add(ArticleJpa.builder()
                .name("Pan Integral")
                .category(ArticleCategory.BAKED)
                .provider(Providers.BIMBO)
                .priceUnit(250.0)
                .precioCompra(500.0)
                .stockActual(1000)
                .existencies(500)
                .lastPurchased(LocalDate.of(2024, 8, 20))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Harina de Trigo")
                .category(ArticleCategory.BAKED)
                .provider(Providers.PUREZA)
                .priceUnit(100.0)
                .precioCompra(250.0)
                .stockActual(800)
                .existencies(400)
                .lastPurchased(LocalDate.of(2024, 7, 10))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Pan Blanco")
                .category(ArticleCategory.BAKED)
                .provider(Providers.BIMBO)
                .priceUnit(220.0)
                .precioCompra(450.0)
                .stockActual(900)
                .existencies(450)
                .lastPurchased(LocalDate.of(2023, 8, 10))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Masa para Pizza")
                .category(ArticleCategory.BAKED)
                .provider(Providers.PUREZA)
                .priceUnit(300.0)
                .precioCompra(600.0)
                .stockActual(700)
                .existencies(350)
                .lastPurchased(LocalDate.of(2024, 7, 5))
                .build());

        //           --------------------- Carnes ---------------------
        articles.add(ArticleJpa.builder()
                .name("Hamburguesa de Pollo")
                .category(ArticleCategory.MEAT)
                .provider(Providers.PATTY)
                .priceUnit(700.0)
                .precioCompra(1400.0)
                .stockActual(450)
                .existencies(225)
                .lastPurchased(LocalDate.of(2024, 9, 15))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Hamburguesa de Res")
                .category(ArticleCategory.MEAT)
                .provider(Providers.PATTY)
                .priceUnit(280.0)
                .precioCompra(520.5)
                .stockActual(400)
                .existencies(200)
                .lastPurchased(LocalDate.of(2024, 9, 17))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Pollos")
                .category(ArticleCategory.MEAT)
                .provider(Providers.PATTY)
                .priceUnit(150.0)
                .precioCompra(300.0)
                .stockActual(300)
                .existencies(155)
                .lastPurchased(LocalDate.of(2024, 5, 21))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Jamon Cocido")
                .category(ArticleCategory.MEAT)
                .provider(Providers.PATTY)
                .priceUnit(300.0)
                .precioCompra(400.0)
                .stockActual(432)
                .existencies(155)
                .lastPurchased(LocalDate.of(2024, 9, 30))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Bacon")
                .category(ArticleCategory.MEAT)
                .provider(Providers.PATTY)
                .priceUnit(230.0)
                .precioCompra(500.0)
                .stockActual(400)
                .existencies(320)
                .lastPurchased(LocalDate.of(2024, 9, 25))
                .build());

        //           --------------------- Lacteos ---------------------
        articles.add(ArticleJpa.builder()
                .name("Leche Entera")
                .category(ArticleCategory.DAIRY)
                .provider(Providers.SERENISIMA)
                .priceUnit(120.0)
                .precioCompra(300.0)
                .stockActual(1200)
                .existencies(600)
                .lastPurchased(LocalDate.of(2024, 9, 22))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Yogur Natural")
                .category(ArticleCategory.DAIRY)
                .provider(Providers.SERENISIMA)
                .priceUnit(130.0)
                .precioCompra(270.0)
                .stockActual(1100)
                .existencies(550)
                .lastPurchased(LocalDate.of(2024, 9, 25))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Queso Muzzarella")
                .category(ArticleCategory.DAIRY)
                .provider(Providers.ELABASTO)
                .priceUnit(130.0)
                .precioCompra(270.0)
                .stockActual(1100)
                .existencies(550)
                .lastPurchased(LocalDate.of(2024, 9, 25))
                .build());

        articles.add(ArticleJpa.builder()
                .name("Queso Cheddar")
                .category(ArticleCategory.DAIRY)
                .provider(Providers.ELABASTO)
                .priceUnit(200.0)
                .precioCompra(350.0)
                .stockActual(500)
                .existencies(320)
                .lastPurchased(LocalDate.of(2024, 4, 12))
                .build());

        //           --------------------- Huevos ---------------------
        articles.add(ArticleJpa.builder()
                .name("Huevos")
                .category(ArticleCategory.DAIRY)
                .provider(Providers.ELABASTO)
                .priceUnit(200.0)
                .precioCompra(350.0)
                .stockActual(500)
                .existencies(320)
                .lastPurchased(LocalDate.of(2024, 4, 12))
                .build());

        return repository.saveAll(articles);
    }
}
