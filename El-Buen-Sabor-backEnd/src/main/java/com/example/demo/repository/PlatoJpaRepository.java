package com.example.demo.repository;

import com.example.demo.models.PlatoJpa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatoJpaRepository extends JpaRepository<PlatoJpa, Long> {
    //Busca si existen los nombres de los platos ingresado
    @Query("SELECT CASE " +
            "WHEN COUNT(*) > 0 THEN true " +
            "ELSE false END " +
            "FROM PlatoJpa p WHERE p.name = :producto")
    boolean existsByName(@Param("producto") String producto);
}
