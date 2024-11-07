//FUNCIO PARA OBTENER TODOS LOS INSUMOS

import { tabla_insumos } from "../../mostrar/mostrar.mjs";

export const agregarInsumos=(valor)=>{
    if (valor=="proveedor") {
        
        var productSelect = document.querySelectorAll('.producto');
        tabla_insumos.forEach(insumo => {
        
            const option = document.createElement('option');
    
            option.value =insumo.name
            option.textContent=insumo.name
            productSelect.forEach(select=>{
    
                select.appendChild(option.cloneNode(true))
            })
        }); 
    }else{
        var productSelect = document.getElementById('categoria_select');
        tabla_insumos.forEach(insumo => {
        
            const option = document.createElement('option');
    
            option.value =insumo.name
            option.textContent=insumo.name
      
    
            productSelect.appendChild(option.cloneNode(true))
        
        }); 
    }
    
    

}