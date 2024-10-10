package com.example.demo.domain.models;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User extends Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String email ;
    private List<String> addresses;
    private List<Long> cards ;
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Orders> orders;

}