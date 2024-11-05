import { proveedores_producto_id } from "../mostrar/mostrar.mjs";


export const categoriaCompletarProveedor=()=> {
  
         
        const categoria = document.getElementById('categoria_select');
        
        console.log(categoria);
        for (const [key, value] of Object.entries(proveedores_producto_id)) {
            console.log(key);
            
            const option = document.createElement('option');
            option.value =key
            option.textContent=key
            categoria.appendChild(option)
            
            
        }
        
        console.log(categoria);
    }
    
    

export const proveedores_select=(selectCategoria,celdas)=>{


            const categoriaSeleccionada = selectCategoria.value;            
            for (const [key, value] of Object.entries(proveedores_producto_id)) {
                if (key === categoriaSeleccionada) {
                    var id_proveedor=value
                    break
                }
            }
            console.log(id_proveedor);
            
            celdas[4].textContent=id_proveedor
            if (!celdas[4].id) {
                
                celdas[4].id="proveedor"
            }
            // Actualizar la celda 4 con el proveedor correspondient
          
        
}

const proveedoresPorCategoria = {
    VEGETAL: 'YAGUAR',
    CARNE: 'PATTY',
    LÁCTEOS: 'SERENISIMA',
    FRUTAS: 'BIMBO',  // Ejemplo
    HONGO: 'Proveedor Hongo',  // Define según corresponda
    LEGUMBRES: 'Proveedor Legumbres',  // Define según corresponda
    SALSA: 'KANSAS',
    AZÚCAR: 'LEDESMA',
    ESPECIAS: 'ABUANA',
    CEREALES: 'Proveedor Cereales',  // Define según corresponda
    ADEREZOS: 'KANSAS',  // Ejemplo
};

