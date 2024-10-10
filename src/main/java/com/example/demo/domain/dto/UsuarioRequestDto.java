package com.example.demo.domain.dto;
import java.util.ArrayList;
public record UsuarioRequestDto(
        String name,
        Long phoneNumber,
        ArrayList<String> adresses,
        ArrayList<Long> cards,
        String mail,
        String passWord
) {
}
