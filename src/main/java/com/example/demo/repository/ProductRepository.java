package com.example.demo.repository;

import com.example.demo.domain.models.Product;
import com.example.demo.domain.models.enums.FoodType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    //Busca si existen los nombres de los platos ingresado
    @Query("SELECT CASE " +
            "WHEN COUNT(*) > 0 THEN true " +
            "ELSE false END " +
            "FROM Product p WHERE p.name = :producto")
    boolean existsByName(@Param("producto") String producto);


    /*
    * https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html
    * */
    List<Product> findByFoodType(FoodType type) ;
}
