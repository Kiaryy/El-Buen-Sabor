package com.example.demo.models;

import com.example.demo.models.enums.Tipo;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//With Lombok
@Getter
@Setter
@AllArgsConstructor
public class Plato {
    private String name;
    private String description;
    private Tipo type;
    private Double price;
    private int stock;
    private boolean avaliable;

    // Without lombok
    /*
    public Plato(String name, String description, Tipo type, Double price, int stock, boolean avaliable) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.price = price;
        this.stock = stock;
        this.avaliable = avaliable;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Tipo getType() {
        return type;
    }
    public void setType(Tipo type) {
        this.type = type;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
    public boolean isAvaliable() {
        return avaliable;
    }
    public void setAvaliable(boolean avaliable) {
        this.avaliable = avaliable;
    }
    */
}
