package com.example.demo.controller;

import com.example.demo.domain.models.Product;
import com.example.demo.domain.models.User;
import com.example.demo.service.ProductInitializerService;
import com.example.demo.service.UserInitilizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("initializer/")
public class DataInitializerController {

    ProductInitializerService platoService;

    UserInitilizerService userService;

    @Autowired
    public DataInitializerController(ProductInitializerService platoService, UserInitilizerService userService) {
        this.platoService = platoService;
        this.userService = userService;
    }

    @GetMapping("createPlates")
    public List<Product> createAllPlates() {
        return platoService.loadMenu();
    }

    @GetMapping("deleteAllPlates")
    public String deleteAllPlates() {
        return platoService.deleteMenu();
    }

    @GetMapping("createUsers")
    public List<User> createAllUsers() {
        return userService.createUsers();
    }

    @GetMapping("deleteAllUsers")
    public String deleteAllUsers() {
        return userService.deleteAllUsers();
    }


}
