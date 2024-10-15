 const url = 'http://localhost:8080/platos/findAll';
    // Realizar la solicitud GET
    fetch(url)
      .then(response => {
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status);
        }
        // Convertir la respuesta a JSON
        return response.json();
      })
      .then(data => {
        // Trabajar con los datos recibidos
        console.log(data);
      })
      .catch(error => {
        // Manejar errores
        console.error('Hubo un problema con la solicitud:', error);
      });
    rest.then(data => {
        console.log(data);
      })
