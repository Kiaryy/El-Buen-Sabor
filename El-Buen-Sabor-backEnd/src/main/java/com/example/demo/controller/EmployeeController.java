package com.example.demo.controller;

import com.example.demo.DTO.request.EmployeeRequestDTO;
import com.example.demo.models.EmployeeJpa;
import com.example.demo.service.EmployeeService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor 
public class EmployeeController {

    private final EmployeeService employeeService;
    @GetMapping("/employees/findAll")
    List<EmployeeJpa> findAll(){
        return employeeService.getAllEmployees();
    }

    @PostMapping("/employees/add")
    public ResponseEntity<String> addEmployee(@RequestBody EmployeeRequestDTO employeeDTO){

        return ResponseEntity.ok(employeeService.addEmployee(employeeDTO));
    }
    
    @PutMapping("/employees/{id}")
    //Updates entity with matching id
    public ResponseEntity<EmployeeJpa> update(@PathVariable Long id, @RequestBody EmployeeRequestDTO employeeDTO){
        return ResponseEntity.status(HttpStatus.OK).body(employeeService.update(id, employeeDTO));
    }

    @DeleteMapping("/employees/{id}")
    // Deletes entity with matching id
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(employeeService.delete(id));
    }
}
