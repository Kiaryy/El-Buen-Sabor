package com.example.demo.domain.dto;

import com.example.demo.domain.models.enums.Charge;
import com.example.demo.domain.models.enums.EmployeeState;

public record EmployeeRequestDto(
        String name,
        Long phoneNumber,
        Double hourlySalary,
        int absences,
        Charge charge,
        EmployeeState state
        
) {
}
