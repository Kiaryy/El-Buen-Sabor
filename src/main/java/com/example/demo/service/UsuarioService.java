package com.example.demo.service;

import com.example.demo.domain.dto.UsuarioRequestDto;
import com.example.demo.domain.models.Usuario;
import com.example.demo.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UsuarioService {
    
    //JPA repository
    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }


    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

        public Usuario findById(Long id){
        Optional<Usuario> entityOptional = usuarioRepository.findById(id);
        return entityOptional.get();
    }

    public String addUsuarios(UsuarioRequestDto usuarioDTO) {

        Usuario usuario = Usuario.builder()
                .name(usuarioDTO.name())
                .email(usuarioDTO.mail())
                .addresses(usuarioDTO.adresses())
                .cards(usuarioDTO.cards())
                .phoneNumber(usuarioDTO.phoneNumber())
                .password(usuarioDTO.passWord())
                .build();
        // Here we save in dataBase
        usuarioRepository.save(usuario);
        return "Usuario agregado";
    }

    public Usuario update(Long id, UsuarioRequestDto entity){
        Optional<Usuario> entityOptional = usuarioRepository.findById(id);
        Usuario usuario = entityOptional.get();
        // We convert the DTO entity to an object
        Usuario usuarioActualizado = Usuario.builder()
                .name(entity.name())
                .email(entity.mail())
                .addresses(entity.adresses())
                .cards(entity.cards())
                .phoneNumber(entity.phoneNumber())
                .password(entity.passWord())
                .build();
        // Saves updated entity to database
        usuario = usuarioRepository.save(usuarioActualizado);
        return usuario;
    }

    public boolean delete(Long id){
        if(usuarioRepository.existsById(id)){
            usuarioRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
