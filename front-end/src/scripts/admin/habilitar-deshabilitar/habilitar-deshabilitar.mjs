import { api_editar } from "../editar/api-editar/api-editar.mjs";

let seccion=""
export function toggleStatus(id,articulo){
    if (articulo=="platos") {
        const div = document.getElementById(`${articulo}`)
        console.log(div);
        const fila = div.querySelector(`tr.fila${id}`)
        const tds = fila.querySelectorAll('td');

        const values=Array.from(tds).map(input => input.textContent);
   
        console.log(values);
        
        values[4]=null
        const update_plate={
            platoId:id,
            name:values[1],
            price:Number(values[2]),
            stock:Number(values[3]),
            available:Boolean(values[4]),
    
        }
        console.log(update_plate);
        
        const url=`http://localhost:8080/platos/${id}`
        api_editar(url,update_plate)
    }
    else if (articulo=="bebidas") {

        seccion='bebidas'
    }
    // editar_fila(id,seccion)
  

    
}
window.toggleStatus = toggleStatus;

