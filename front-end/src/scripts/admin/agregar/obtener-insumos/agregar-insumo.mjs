//FUNCIO PARA OBTENER TODOS LOS INSUMOS

import { proveedores_producto_id} from "../../mostrar/mostrar.mjs";

export const agregarInsumos=(valor)=>{
    if (valor=="proveedor") {
        
        var productSelect = document.querySelectorAll('.producto');
        for (const [key] of Object.entries(proveedores_producto_id)) {
            console.log(key);
            
            const option = document.createElement('option');
            option.value =key
            option.textContent=key
            productSelect.forEach(select=>{

                select.appendChild(option)
            })
            
            
        }
    }
     
    
    

    
    

}