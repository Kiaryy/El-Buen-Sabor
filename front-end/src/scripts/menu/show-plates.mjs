const section_hamburguesa=document.querySelector('#section-hamburguesa')
const section_pizza=document.querySelector('#section-pizza')
const section_empanada=document.querySelector('#section-empanada')
const section_ensalada=document.querySelector('#section-ensalada')
const section_acompañamiento=document.querySelector('#section-acompañamiento')
const section_postre=document.querySelector('#section-postre')


window.onload =async function () {
    console.log("hola");
    const url = 'https://bsapi-latest.onrender.com/platos/findAll';
    // const add = 'https://bsapi-latest.onrender.com/platos/add';
// Realizar la solicitud GET
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
    const sectionMap = {
        HAMBURGUESA: section_hamburguesa,
        PIZZA: section_pizza,
        EMPANADA: section_empanada,
        ENSALADA: section_ensalada,
        ACOMPAÑANMIENTO: section_acompañamiento,
        POSTRE: section_postre
    };

    // Trabajar con los datos recibidos
    data.forEach(item => {
        // Si existe una sección para el tipo de comida
        if (sectionMap[item.type]) {
            sectionMap[item.type].innerHTML += `
                <div class="card-food">
                    <a href="#" class="food"></a>
                    <img alt="imagen comida" src="${item.img}">
                    <h3>${item.name}</h3>
                </div>
            `;
        }
    });
})
    
    // Object.values(hamburguesaDict).forEach(hamburguesa => {
    //     console.log(hamburguesa.name);
    //  
    // })

.catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
});

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


 //--------------------------------MODIFICA---------------------------------------------------------
// const modifcar = 'https://bsapi-latest.onrender.com/platos/42';

// // Datos actualizados para el plato
// const updatedData = {
//     name: 'Empanada de Carne',
//     description: 'Empanada rellena con carne picada',
//     type: 'EMPANADA',
//     price: 9000,
//     stock: 25,
//     available: true,
//     img:"buea gil"
// };

// // Llamada PUT con fetch
// fetch(modifcar, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedData),
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Error en la actualización del plato');
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Plato actualizado exitosamente:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });
}
