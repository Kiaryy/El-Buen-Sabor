package com.example.demo.models;

import com.example.demo.models.enums.Charge;
import com.example.demo.models.enums.EmployeeState;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class EmployeeJpa extends Person{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;
    private Double hourlySalary;
    private int absences;
    private Charge charge;
    private EmployeeState state;
    private String shift;

}
