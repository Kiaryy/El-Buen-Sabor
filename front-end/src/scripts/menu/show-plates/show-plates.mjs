import { save_plates } from "./local-plates/save-plates.mjs";
export const show_plates =(sectionMap)=>{
    const url = 'https://bsapi-latest.onrender.com/platos/findAll';
    load_plates(sectionMap,url)

    // }
}

const load_plates=async (sectionMap,url)=>{

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
        var plates_new=[]

        data.forEach(item => {
            
            // Verificar si existe una sección para el tipo de comida
            if (sectionMap[item.type]) {

                
                    sectionMap[item.type].innerHTML += `
                    <div class="card-food" data-name="${item.name}" data-description="${item.description}" data-price="${item.price}">
                    <img alt="imagen comida" src="data:image/png;base64,${item.imageData}">
                    <h5>${item.name}</h5>
                    </div>
                    `;

                    let plate={
                        name:item.name,
                        description:item.description,
                        price:item.price,
                        img:item.img,
                        type:item.type
                    }
                    plates_new.push(plate)
                }
                // localStorage.setItem('Platos', JSON.stringify([]));
                // save_plates(plates_new)
    });
} catch (error) {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
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