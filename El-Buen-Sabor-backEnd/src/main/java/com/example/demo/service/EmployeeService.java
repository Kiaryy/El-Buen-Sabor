package com.example.demo.service;

import com.example.demo.DTO.request.EmployeeRequestDTO;
import com.example.demo.models.EmployeeJpa;
import com.example.demo.repository.EmployeeJpaRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EmployeeService {
    
    //JPA repository
    @Autowired
    private EmployeeJpaRepository employeeJpaRepository;

    public EmployeeService(EmployeeJpaRepository employeeJpaRepository) {
        this.employeeJpaRepository = employeeJpaRepository;
    }


    public List<EmployeeJpa> getAllEmployees() {
        return employeeJpaRepository.findAll();
    }

        public EmployeeJpa findById(Long id){
        Optional<EmployeeJpa> entityOptional = employeeJpaRepository.findById(id);
        return entityOptional.get();
    }

    public String addEmployee(EmployeeRequestDTO employeeDTO) {

        EmployeeJpa employee = EmployeeJpa.builder()
                .name(employeeDTO.name())
                .phoneNumber(employeeDTO.phoneNumber())
                .hourlySalary(employeeDTO.hourlySalary())
                .absences(employeeDTO.absences())
                .charge(employeeDTO.charge())
                .state(employeeDTO.state())
                .shift(employeeDTO.charge().getShift())
                .build();


        // Here we save in dataBase
        employeeJpaRepository.save(employee);
        return "Employee added";
    }

    public EmployeeJpa update(Long id, EmployeeRequestDTO entity){
        Optional<EmployeeJpa> entityOptional = employeeJpaRepository.findById(id); 
        EmployeeJpa employee = entityOptional.get();
        // We convert the DTO entity to an object
        EmployeeJpa updatedEmployee = EmployeeJpa.builder()
                .name(entity.name())
                .phoneNumber(entity.phoneNumber())
                .hourlySalary(entity.hourlySalary())
                .absences(entity.absences())
                .charge(entity.charge())
                .state(entity.state())
                .shift(entity.charge().getShift())
                .build();
        // Saves updated entity to database
        employee = employeeJpaRepository.save(updatedEmployee);
        return employee;
    }

    public boolean delete(Long id){
        if(employeeJpaRepository.existsById(id)){
            employeeJpaRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
