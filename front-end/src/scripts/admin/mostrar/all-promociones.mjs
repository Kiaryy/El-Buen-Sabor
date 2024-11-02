import { last_id } from "../lastId.mjs";
let lastPromocionId = null;

export const promociones=(url,table)=>{
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
            tr.innerHTML=
            `
            <td>${item.id}</td>
            <td>falta</td>
            <td>${item.platos}</td>
            <td>${item.bebidas}</td>
            <td>${item.precio}</td>
            <td>falta</td>
            <td>falta</td>
            <td>falta</td>
                <td>
            <button onclick="editItem()">
                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
            </button>
            <button onclick="deleteItem()">
                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/delete.png" alt="eliminar" title="Eliminar">
            </button>
            <button onclick="toggleStatus()">
                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
            </button>
            </td>
                    `

            table.appendChild(tr)
    
        });
        
       lastPromocionId=last_id(data)
})
.catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
});
}
export {lastPromocionId}