package com.example.demo.DTO.request;
import java.util.ArrayList;
public record UsuarioRequestDTO(
        String name,
        Long phoneNumber,
        ArrayList<String> adresses,
        ArrayList<Long> cards,
        String mail,
        String passWord
) {
}
