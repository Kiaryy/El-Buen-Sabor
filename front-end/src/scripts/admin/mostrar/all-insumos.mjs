import { last_id } from "../lastId.mjs";

let lastInsumoId = null;

export const insumos=(url,table)=>{
         //------------------------------OBTIENEE---------------------------------------------------------
         fetch(url,{
            method: 'GET'
        })
        .then(response => {
            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            
            // Convertir la respuesta a JSON
            return response.json();
        })
       
        .then(data => {      
                // Mapeamos las secciones a los tipos de comida 
                // Trabajar con los datos recibidos
                data.forEach(item => {
                let tr=document.createElement('tr')    
                tr.classList.add(`fila${item.articleId}`) 
                tr.innerHTML=
                `
                <td>${item.articleId}</td>
                <td>${item.name}</td>
                <td>${item.denominacion}</td>
                <td>${item.category}</td>
                <td>${item.provider}</td>
                <td>${item.priceUnit}</td>
                <td>${item.precioCompra}</td>
                <td>${item.stockActual}</td>
                <td>${item.existencies}</td>
                <td>${item.lastPurchased}</td>
                    <td>
                <button onclick="editItem(${item.articleId},'insumos')">
                    <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                </button>
                <button onclick="toggleStatus(${item.articleId},'insumos')">
                    <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                </button>
                </td>
                        `
    
                table.appendChild(tr)
        
            });
            lastInsumoId=last_id(data,'articleId')
           
           
    })
    .catch(error => {
        // Manejar errores
        console.error('Hubo un problema con la solicitud:', error);
    });
    
}
export {lastInsumoId}