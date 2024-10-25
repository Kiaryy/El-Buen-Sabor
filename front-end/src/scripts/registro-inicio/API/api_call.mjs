export const api_call =(add,section_login,section_sign_up,new_user)=>{
    fetch(add, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Especificamos que los datos están en formato JSON
        },
        body: JSON.stringify(new_user) // Convertimos los datos a formato JSON
    })
    .then(response => {
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        
        // Verificar si el tipo de contenido es JSON
        const contentType = response.headers.get('Content-Type');
        
        if (contentType && contentType.includes('application/json')) {
            return response.json(); // Leer como JSON si es de tipo JSON
        } else {
            return response.text(); // Leer como texto si no es JSON
        }
    })
    .then(data => {
        // Mostrar mensaje de éxito
        section_login.classList.remove('hide');
        section_sign_up.classList.add('hide');
        alert("Usuario registrado con éxito");
    })
    .catch(error => {
        // Manejar errores
        console.error('Hubo un problema con la solicitud:', error);
        alert("No se pudo registrar el usuario");
    });
    
}  
