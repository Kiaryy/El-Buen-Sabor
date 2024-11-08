import { show_promos } from "./show-promos/show-promos.mjs";

export const show_plates = async(sectionMap)=>{

    const url = ' http://localhost:8080/platos/findAll';
    // const url = 'https://proactive-intuition-production-15d4.up.railway.app/platos/findAll';
    await load_plates(sectionMap,url);
    show_promos();
    
    // }
}

const load_plates=async (sectionMap,url)=>{
    loader.style.display = 'block';

    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Mapeamos las secciones a los tipos de comida+
        // Mostrar los productos en las respectivas secciones
        // var plates_new=[]
        
        data.forEach(item => {
          
            
            // Verificar si existe una sección para el tipo de comida
            if (sectionMap[item.type]) {
                
                    sectionMap[item.type].innerHTML += `
                    <div class="card-food" data-name="${item.name}" data-description="${item.description}" data-price="${item.price}">
                    <img alt="imagen comida" src="data:image/png;base64,${item.imageData}">
                    <h5>${item.name}</h5>
                    </div>
                    `;

                }

    });
} catch (error) {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
}finally {
            // Ocultar la animación de carga
            loader.style.display = 'none';
        }
}













//------------------------------AGREGA---------------------------------------------------------
//  const nuevo_plato= {
//     name: 'Empanada de Carne',
//     description: 'Empanada rellena con carne picada',
//     type: 'EMPANADA',
//     price: 850,
//     stock: 25,
//     available: true,
//     img:"buea gil"
//  }

// fetch(add,{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json' // Especificamos que los datos están en formato JSON
//     },
    
//     body: JSON.stringify(nuevo_plato) // Convertimos los datos a formato JSON
// })
// .then(response => {
//     // Verificar si la respuesta fue exitosa
//     if (!response.ok) {
//     throw new Error('Error en la solicitud: ' + response.status);
//     }
//     // Convertir la respuesta a JSON
//     return response.json();
// })
// .then(data => {
//     // Mapeamos las secciones a los tipos de comida
// })

// .catch(error => {
//     // Manejar errores
//     console.error('Hubo un problema con la solicitud:', error);
// });