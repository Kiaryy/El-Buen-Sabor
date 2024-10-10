package com.example.demo.controller;

import com.example.demo.domain.dto.UsuarioRequestDto;
import com.example.demo.domain.models.Usuario;
import com.example.demo.service.UsuarioService;

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
public class UsuarioController {

    private final UsuarioService usuarioService;
    @GetMapping("/usuarios/findAll")
    List<Usuario> findAll(){
        return usuarioService.getAllUsuarios();
    }

    @PostMapping("/usuarios/add")
    public ResponseEntity<String> addUsuarios(@RequestBody UsuarioRequestDto usuarioDTO){
        return ResponseEntity.ok(usuarioService.addUsuarios(usuarioDTO));
    }
    
    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> update(@PathVariable Long id, @RequestBody UsuarioRequestDto usuarioDTO){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.update(id, usuarioDTO));
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(usuarioService.delete(id));
    }
}
