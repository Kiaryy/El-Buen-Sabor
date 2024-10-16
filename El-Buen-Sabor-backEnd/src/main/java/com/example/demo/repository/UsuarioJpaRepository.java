package com.example.demo.repository;

import com.example.demo.models.UsuarioJpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioJpaRepository extends JpaRepository<UsuarioJpa, Long> {
}
