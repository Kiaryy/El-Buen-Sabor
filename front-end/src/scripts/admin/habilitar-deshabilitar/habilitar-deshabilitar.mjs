let seccion=""
export function toggleStatus(id,articulo){
    if (articulo=="platos") {

        seccion='platos'
    }
    else if (articulo=="insumos") {

        seccion='insumos'
    }
    else if (articulo=="bebidas") {

        seccion='bebidas'
    }
    // editar_fila(id,seccion)
    console.log("hasdfkasdlsk");
    
}
window.toggleStatus = toggleStatus;