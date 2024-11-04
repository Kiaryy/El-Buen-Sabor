




export function sendDataToApi(add,url) {
    // Assuming your API endpoint is 'https://your-api-endpoint.com/upload'

    // Create a JSON object to send

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(add),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Producto agregado:'); // Manejo de la respuesta aquí
        location.reload(); // 
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}
