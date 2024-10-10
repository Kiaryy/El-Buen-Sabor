package com.example.demo.repository;

import com.example.demo.domain.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    //Busca si existen los nombres de los platos ingresado
    @Query("SELECT CASE " +
            "WHEN COUNT(*) > 0 THEN true " +
            "ELSE false END " +
            "FROM Product p WHERE p.name = :producto")
    boolean existsByName(@Param("producto") String producto);
}
