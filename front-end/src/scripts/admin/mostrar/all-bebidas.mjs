import { last_id } from "../lastId.mjs";
let lastBebidaId = null;

export const bebidas=(url,table)=>{
   
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
            tr.classList.add(`fila${item.id}`) 
            tr.innerHTML=
            `
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.descripcion}</td>
            <td>${item.precio}</td>
            <td>${item.stock}</td>
            
            <td>
            <button onclick="editItem(${item.id},'bebidas')">
                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
            </button>
         
            <button onclick="toggleStatus(${item.id},'bebidas')">
                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
            </button>
            </td>
                    `

            table.appendChild(tr)
    
        });
        lastBebidaId=last_id(data,'id')
       
})
.catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
});
}
export {lastBebidaId}