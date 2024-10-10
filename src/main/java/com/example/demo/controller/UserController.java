package com.example.demo.controller;

import com.example.demo.domain.dto.UserRequestDto;
import com.example.demo.domain.models.User;
import com.example.demo.service.UserService;

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
public class UserController {

    private final UserService userService;
    @GetMapping("/usuarios/findAll")
    List<User> findAll(){
        return userService.getAllUsuarios();
    }

    @PostMapping("/usuarios/add")
    public ResponseEntity<String> addUsuarios(@RequestBody UserRequestDto usuarioDTO){
        return ResponseEntity.ok(userService.addUsuarios(usuarioDTO));
    }
    
    @PutMapping("/usuarios/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody UserRequestDto usuarioDTO){
        return ResponseEntity.status(HttpStatus.OK).body(userService.update(id, usuarioDTO));
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(userService.delete(id));
    }
}
