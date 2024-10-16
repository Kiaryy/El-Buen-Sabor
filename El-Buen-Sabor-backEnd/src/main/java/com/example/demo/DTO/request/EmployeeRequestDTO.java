package com.example.demo.DTO.request;

import com.example.demo.models.enums.Charge;
import com.example.demo.models.enums.EmployeeState;
public record EmployeeRequestDTO(
        String name,
        Long phoneNumber,
        Double hourlySalary,
        int absences,
        Charge charge,
        EmployeeState state
        
) {
}
