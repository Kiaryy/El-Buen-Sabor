package com.example.demo.service;

import com.example.demo.domain.dto.UserRequestDto;
import com.example.demo.domain.models.User;
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


    public List<User> getAllUsuarios() {
        return userRepository.findAll();
    }

        public User findById(Long id){
        Optional<User> entityOptional = userRepository.findById(id);
        return entityOptional.get();
    }

    public String addUsuarios(UserRequestDto usuarioDTO) {

        User user = User.builder()
                .name(usuarioDTO.name())
                .email(usuarioDTO.mail())
                .addresses(usuarioDTO.adresses())
                .cards(usuarioDTO.cards())
                .phoneNumber(usuarioDTO.phoneNumber())
                .password(usuarioDTO.passWord())
                .build();
        // Here we save in dataBase
        userRepository.save(user);
        return "User agregado";
    }

    public User update(Long id, UserRequestDto entity){
        Optional<User> entityOptional = userRepository.findById(id);
        User user = entityOptional.get();
        // We convert the DTO entity to an object
        User userActualizado = User.builder()
                .name(entity.name())
                .email(entity.mail())
                .addresses(entity.adresses())
                .cards(entity.cards())
                .phoneNumber(entity.phoneNumber())
                .password(entity.passWord())
                .build();
        // Saves updated entity to database
        user = userRepository.save(userActualizado);
        return user;
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
