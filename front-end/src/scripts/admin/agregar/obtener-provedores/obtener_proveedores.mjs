import { proveedores_producto_id } from "../../mostrar/mostrar.mjs";
import { proveedores_nombre } from "../../mostrar/mostrar.mjs";
//FUNCION PARA QUE CUANDO SE PONGO OTRO OPCION SE AUTO COMPLETE EL PROVEEDOR
export const obtener_proveedor = (newRow) => {
    const selectCategoria = document.getElementById('categoria_select');
    selectCategoria.addEventListener('change', function () {
        const celdas = newRow.querySelectorAll('td');
        proveedores_select(selectCategoria, celdas)
    })
}
//FUNCION PARA QUE APAREZCAN LA CATEGORIA EN EL SELECT
export const categoriaCompletarProveedor=()=> {
    const categoria = document.getElementById('categoria_select');
    
    for (const [key] of Object.entries(proveedores_producto_id)) {
        console.log(key);
        
        const option = document.createElement('option');
        option.value =key
        option.textContent=key
        categoria.appendChild(option)
        
        
    }
    
    console.log(categoria);
}

//FUNCION PARA QUE DA EL ID DEL PROVEEDOR
export const proveedores_select=(selectCategoria,celdas)=>{
            const categoriaSeleccionada = selectCategoria.value;     
            console.log(categoriaSeleccionada);
                   
            for (const [key, value] of Object.entries(proveedores_producto_id)) {
                console.log(key);
                
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
//FUNCION PARA OBTENER LE NOMBRE DEL PROVEDDOR Y EL ID
export const obtener_nombre_proveedor = () => {
    const nombre_proveedores = document.getElementById('nombre_proveedor');
    proveedores_nombre.forEach(nombre => {
        const option = document.createElement('option');
        option.value = nombre.id;
        option.textContent = nombre.nombre;
        option.setAttribute('data-precio', nombre.precio); // Guardar el precio en un atributo data-precio
        nombre_proveedores.appendChild(option);
    });
};