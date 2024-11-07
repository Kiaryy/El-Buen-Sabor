
export const ver_cuenta =() => {
    const url = 'https://bsapi-latest.onrender.com/contabilidad/findCuentas';
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
            console.log(data);
            
        });
      
        


};
