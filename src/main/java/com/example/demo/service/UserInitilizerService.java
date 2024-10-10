package com.example.demo.service;

import com.example.demo.domain.models.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserInitilizerService {
    private final UserRepository repository;

    @Autowired
    public UserInitilizerService(UserRepository repository) {
        this.repository = repository;
    }

    public String deleteAllUsers() {
        repository.deleteAll(repository.findAll());

        return "Deleted all users" ;
    }
    public List<User> createUsers() {

        List<User> users = new ArrayList<>();

        List<String> addresses = new ArrayList<>();

        addresses.add("Calle Falsa 123");
        addresses.add("Calle Verdadera 456");
        addresses.add("Calle Null 456");

        users.add(User.builder()
                .name("Pedro Gonzales")
                .email("pedro.gonzales@gmail.com")
                .addresses(addresses)
                .password("123456789")
                .build());

        users.add(User.builder()
                .name("Manolo Garcia")
                .email("manolo.garcia@gmail.com")
                .addresses(addresses)
                .password("123456789")
                .build());

        users.add(User.builder()
                .name("Armando Esteban Quito")
                .email("Armando.Quito@gmail.com")
                .addresses(addresses)
                .password("123456789")
                .build());


        return repository.saveAll(users);

    }
}
