package com.example.demo.repository;

import com.example.demo.models.ArticleJpa;
import com.example.demo.models.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
