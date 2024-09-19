//     const $ = selector => document.querySelector(selector);
//     const º = selector => document.querySelectorAll(selector);

// const contenedor = $("#popular");

const url = 'http://localhost:8080/api/mostrar-platos';
// Agrega un event listener al contenedor que escucha clicks en elementos con clase .button-to-cart
fetch(url)
.then(response => {
    // Verificar si la respuesta fue exitos
    // Convertir la respuesta a JSON
    return response.json();})
    .then(data => {
        console.log(data[5]);
      
    })



// Realizar la solicitud GET
// fetch(url)
//   .then(response => {
//     // Verificar si la respuesta fue exitosa
//     if (!response.ok) {
//       throw new Error('Error en la solicitud: ' + response.status);
//     }
//     // Convertir la respuesta a JSON
//     return response.json();
//   })
//   .then(data => {
//     // Trabajar con los datos recibidos
//     console.log(data);
//   })
//   .catch(error => {
//     // Manejar errores
//     console.error('Hubo un problema con la solicitud:', error);
//   });