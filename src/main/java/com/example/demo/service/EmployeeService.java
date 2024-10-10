package com.example.demo.service;

import com.example.demo.domain.dto.EmployeeRequestDto;
import com.example.demo.domain.models.Employee;
import com.example.demo.repository.EmployeeRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EmployeeService {
    
    //JPA repository
    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

        public Employee findById(Long id){
        Optional<Employee> entityOptional = employeeRepository.findById(id);
        return entityOptional.get();
    }

    public String addEmployee(EmployeeRequestDto employeeDTO) {

        Employee employee = Employee.builder()
                .name(employeeDTO.name())
                .phoneNumber(employeeDTO.phoneNumber())
                .hourlySalary(employeeDTO.hourlySalary())
                .absences(employeeDTO.absences())
                .charge(employeeDTO.charge())
                .state(employeeDTO.state())
                .shift(employeeDTO.charge().getShift())
                .build();


        // Here we save in dataBase
        employeeRepository.save(employee);
        return "Employee added";
    }

    public Employee update(Long id, EmployeeRequestDto entity){
        Optional<Employee> entityOptional = employeeRepository.findById(id);
        Employee employee = entityOptional.get();
        // We convert the DTO entity to an object
        Employee updatedEmployee = Employee.builder()
                .name(entity.name())
                .phoneNumber(entity.phoneNumber())
                .hourlySalary(entity.hourlySalary())
                .absences(entity.absences())
                .charge(entity.charge())
                .state(entity.state())
                .shift(entity.charge().getShift())
                .build();
        // Saves updated entity to database
        employee = employeeRepository.save(updatedEmployee);
        return employee;
    }

    public boolean delete(Long id){
        if(employeeRepository.existsById(id)){
            employeeRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
