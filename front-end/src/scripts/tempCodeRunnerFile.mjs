const url = 'https://demoapi-latest.onrender.com/platos/findAll';
// Agrega un event listener al contenedor que escucha clicks en elementos con clase .button-to-cart
fetch(url)
.then(response => {
    // Verificar si la respuesta fue exitos
    // Convertir la respuesta a JSON
    return response.json();})
    .then(data => {
        
        console.log(data);
    })
