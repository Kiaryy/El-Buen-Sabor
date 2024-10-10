package com.example.demo.service;

import com.example.demo.domain.dto.UserRequestDto;
import com.example.demo.domain.models.Usuario;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserService {
    
    //JPA repository
    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<Usuario> getAllUsuarios() {
        return userRepository.findAll();
    }

        public Usuario findById(Long id){
        Optional<Usuario> entityOptional = userRepository.findById(id);
        return entityOptional.get();
    }

    public String addUsuarios(UserRequestDto usuarioDTO) {

        Usuario usuario = Usuario.builder()
                .name(usuarioDTO.name())
                .email(usuarioDTO.mail())
                .addresses(usuarioDTO.adresses())
                .cards(usuarioDTO.cards())
                .phoneNumber(usuarioDTO.phoneNumber())
                .password(usuarioDTO.passWord())
                .build();
        // Here we save in dataBase
        userRepository.save(usuario);
        return "Usuario agregado";
    }

    public Usuario update(Long id, UserRequestDto entity){
        Optional<Usuario> entityOptional = userRepository.findById(id);
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
        usuario = userRepository.save(usuarioActualizado);
        return usuario;
    }

    public boolean delete(Long id){
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
