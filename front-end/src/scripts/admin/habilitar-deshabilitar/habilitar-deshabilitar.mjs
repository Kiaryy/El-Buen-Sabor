import { api_editar } from "../editar/api-editar/api-editar.mjs";

let seccion=""
export async function toggleStatus(id,articulo){
    if (articulo=="platos"|| articulo=="promociones") {
        const div = document.getElementById(`${articulo}`)
        const fila = div.querySelector(`tr.fila${id}`)
        const tds = fila.querySelectorAll('td');

        const values=Array.from(tds).map(input => input.textContent);
   
  
        if (articulo=="platos") {
            values[4]=null
            var update={
                platoId:id,
                name:values[1],
                price:Number(values[2]),
                stock:Number(values[3]),
                available:Boolean(values[4]),
        
            }
            
            
            // var url=`http://localhost:8080/platos/${id}`
            var url=`http://localhost:8080/platos/${id}`
           
          
        }else{
       
           // Crear la lista de listas combinando nombres y precios
           values[5]=null
            var update={
                platoId:id,
                name:values[1],
                precio:values[4],
                available:Boolean(values[5]),
                
            }
    
            // var url=`http://localhost:8080/promotions/${id}`
            var url=`http://localhost:8080/promotions/${id}`
        }
        
        await api_editar(url,update)
        location.reload();

     
    }
    
    // editar_fila(id,seccion)
  

    
}
window.toggleStatus = toggleStatus;

