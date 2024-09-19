package com.example.demo.service;

import com.example.demo.models.Categoria;
import com.example.demo.repository.CategoriaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService extends BaseService<Categoria, Long>{
    public CategoriaService(CategoriaRepository categoriaRepository) {
        super(categoriaRepository);
    }

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Transactional
    public Categoria agregarSubcategoria(Long idCategoriaPadre, Categoria nuevasubCategoria) throws Exception{

        try{
            Categoria cagetoriaPadre = categoriaRepository.findById(idCategoriaPadre).orElse(null);
            if (cagetoriaPadre == null){

                nuevasubCategoria.setCategoriaPadre(cagetoriaPadre);
                categoriaRepository.save(nuevasubCategoria);
                return nuevasubCategoria;
            }else{
                return null;
            }
        }catch (Exception ex){
            throw new Exception(ex.getMessage());
        }
    }

    @Transactional
    public List<Categoria> listarPorCategoriaPadre(Long idCategoriaPadre) throws Exception {
        try{
            return categoriaRepository.findAllByCategoriaPadreId(idCategoriaPadre);
        }catch(Exception ex){
            throw new Exception(ex.getMessage());
        }
    }
}
