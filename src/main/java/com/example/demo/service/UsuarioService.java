package com.example.demo.service;

import com.example.demo.DTO.request.UsuarioRequestDTO;
import com.example.demo.models.UsuarioJpa;
import com.example.demo.repository.UsuarioJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UsuarioService {
    
    //JPA repository
    @Autowired
    private UsuarioJpaRepository usuarioJpaRepository;

    public UsuarioService(UsuarioJpaRepository usuarioJpaRepository) {
        this.usuarioJpaRepository = usuarioJpaRepository;
    }


    public List<UsuarioJpa> getAllUsuarios() {
        return usuarioJpaRepository.findAll();
    }

        public UsuarioJpa findById(Long id){
        Optional<UsuarioJpa> entityOptional = usuarioJpaRepository.findById(id);
        return entityOptional.get();
    }

    public String addUsuarios(UsuarioRequestDTO usuarioDTO) {

        UsuarioJpa usuario = UsuarioJpa.builder()
                .name(usuarioDTO.name())
                .email(usuarioDTO.mail())
                .addresses(usuarioDTO.adresses())
                .cards(usuarioDTO.cards())
                .phoneNumber(usuarioDTO.phoneNumber())
                .password(usuarioDTO.passWord())
                .build();
        // Here we save in dataBase
        usuarioJpaRepository.save(usuario);
        return "Usuario agregado";
    }

    public UsuarioJpa update(Long id, UsuarioRequestDTO entity){
        Optional<UsuarioJpa> entityOptional = usuarioJpaRepository.findById(id); 
        UsuarioJpa usuario = entityOptional.get();
        // We convert the DTO entity to an object
        UsuarioJpa usuarioActualizado = UsuarioJpa.builder()
                .name(entity.name())
                .email(entity.mail())
                .addresses(entity.adresses())
                .cards(entity.cards())
                .phoneNumber(entity.phoneNumber())
                .password(entity.passWord())
                .build();
        // Saves updated entity to database
        usuario = usuarioJpaRepository.save(usuarioActualizado);
        return usuario;
    }

    public boolean delete(Long id){
        if(usuarioJpaRepository.existsById(id)){
            usuarioJpaRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
