package com.example.demo.controller;

import com.example.demo.models.PlatoJpa;
import com.example.demo.models.UsuarioJpa;
import com.example.demo.service.PlateInitializerService;
import com.example.demo.service.UserInitilizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("initializer/")
public class DataInitializerController {


    @Autowired
    PlateInitializerService platoService;

    @Autowired
    UserInitilizerService userService;

    @GetMapping("createPlates")
    public List<PlatoJpa> createAllPlates(){
        return platoService.loadMenu();
    }

    @GetMapping("deleteAllPlates")
    public String deleteAllPlates(){
        return platoService.deleteMenu();
    }

    @GetMapping("createUsers")
    public List<UsuarioJpa> createAllUsers(){
        return userService.createUsers();
    }

    @GetMapping("deleteAllUsers")
    public String deleteAllUsers(){
        return userService.deleteAllUsers();
    }
}