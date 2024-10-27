// ID del plato que queremos editar
const platoId = 123; // Reemplaza con el ID real del plato

// URL del endpoint para actualizar el plato
const updateUrl = `https://bsapi-latest.onrender.com/platos/1`;

// Datos a actualizar
const platoEditado = {
    name: 'Empanada de Carne',
    description: 'Empanada rellena con carne picada y especias',
    type: 'EMPANADA',
    price: 900, // Nuevo precio
    stock: 30,  // Nuevo stock
    available: true,
    img: "ruta/nueva-imagen.jpg" // Cambia a la ruta de la imagen
};

// Realizar la solicitud PUT para actualizar el plato
fetch(updateUrl, {
    method: 'PUT', // Método para actualizar
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(platoEditado)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();
})
.then(data => {
    console.log('Plato actualizado:', data);
    // Puedes hacer algo con los datos actualizados
})
.catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
});