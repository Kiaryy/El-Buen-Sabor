import { bebidas } from "../mostrar/all-bebidas.mjs";

import {editar_fila} from "./editar-fila.mjs"


let seccion=""
export function editItem(id,articulo){
    if (articulo=="platos") {

        seccion='platos'
    }
    else if (articulo=="insumos") {

        seccion='insumos'
    }
    else if (articulo=="bebidas") {

        seccion='bebidas'
    }
    editar_fila(id,seccion)
    
}
window.editItem = editItem;



// deleteItem(id,articulo)
// toggleStatus(id,articulo)