import { api_editar } from "../editar/api-editar/api-editar.mjs";

let seccion=""
export function toggleStatus(id,articulo){
    if (articulo=="platos"|| articulo=="promociones") {
        const div = document.getElementById(`${articulo}`)
        console.log(div);
        const fila = div.querySelector(`tr.fila${id}`)
        const tds = fila.querySelectorAll('td');

        const values=Array.from(tds).map(input => input.textContent);
   
        console.log(values);
        if (articulo=="platos") {
            values[4]=null
            var update_plate={
                platoId:id,
                name:values[1],
                price:Number(values[2]),
                stock:Number(values[3]),
                available:Boolean(values[4]),
        
            }
            console.log(update_plate);
            
            var url=`http://localhost:8080/platos/${id}`
          
        }else{
            const update_promo={
                platoId:id,
                name:values[1],
                platos:values[2],
                bebidas:values[3],
                precio:values[4],
                available:Boolean(values[5]),
                
            }
            console.log(update_promo);
            var url=`http://localhost:8080/promotions/${id}`
        }
        api_editar(url,update_promo)
        location.reload();

     
    }
    else if (articulo=="bebidas") {

        seccion='bebidas'
    }
    // editar_fila(id,seccion)
  

    
}
window.toggleStatus = toggleStatus;

