export const ventas=(url,table)=>{
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
            <td>${item.dateSale}</td>
            <td>${item.nameofUser}</td>
            <td>${item.pedido}</td>
            <td>falta</td>
            <td>${item.cards}</td>
            <td>falta</td>
              
                    `

            table.appendChild(tr)
    
        });
        
       
})
.catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
});

}