package com.example.demo.repository;

import com.example.demo.models.EmployeeJpa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeJpaRepository extends JpaRepository<EmployeeJpa, Long> {
}
