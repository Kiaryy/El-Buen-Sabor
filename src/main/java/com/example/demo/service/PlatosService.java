package com.example.demo.service;

import com.example.demo.domain.dto.PlatoRequestDto;
import com.example.demo.domain.models.PlatoJpa;
import com.example.demo.repository.PlatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PlatosService {

    private final PlatoRepository platoRepository;
    @Autowired
    public PlatosService(PlatoRepository platoRepository) {

        this.platoRepository = platoRepository;
    }

    //JPA repository

    public List<PlatoJpa> getAllPlatos() {
        return platoRepository.findAll();
    }

    public PlatoJpa findById(Long id){
        Optional<PlatoJpa> entityOptional = platoRepository.findById(id);
        return entityOptional.get();
    }

    public String addPlatos(PlatoRequestDto platoDTO){


        PlatoJpa plato = PlatoJpa.builder()
                .name(platoDTO.name())
                .description(platoDTO.description())
                .price(platoDTO.price())
                .type(platoDTO.type())
                .stock(platoDTO.stock())
                .available(true)
                .img(platoDTO.img())
                .build();
        // Here we save in dataBase
        platoRepository.save(plato);
        return "Plato agregado";
    }

    public PlatoJpa update(Long id, PlatoRequestDto entity){
        Optional<PlatoJpa> entityOptional = platoRepository.findById(id);
        PlatoJpa plato = entityOptional.get();
        // We convert the DTO entity to an object
        PlatoJpa platoActualizado = PlatoJpa.builder()
                .platoId(id)
                .name(entity.name())
                .description(entity.description())
                .price(entity.price())
                .type(entity.type())
                .stock(entity.stock())
                .available(true)
                .img(entity.img())
                .build();
        // Saves updated entity to database
        plato = platoRepository.save(platoActualizado);
        return plato;
    }
    public boolean delete(Long id){
        if(platoRepository.existsById(id)){
            platoRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
