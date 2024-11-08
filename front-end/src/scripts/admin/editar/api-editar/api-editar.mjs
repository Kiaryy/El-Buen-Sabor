export const api_editar=async (url, datosActualizados)=>{
    try {
        console.log("url",url);
        
        const response = await fetch(`${url}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json', // Indica que el cuerpo es JSON
            },
            body: JSON.stringify(datosActualizados), // Convierte el objeto a JSON
        });

        if (!response.ok) {
            throw new Error('Error al modificar el producto');
        }

        const resultado = await response.json(); // Parsear la respuesta JSON
        alert('Producto modificado:'); // Manejo de la respuesta aquí
        return resultado; // Retorna el resultado actualizado
        
    } catch (error) {
        console.log(error);
        
        alert('Error en la función modificarProducto:', error); // Manejo de errores aquí
    }
      
}