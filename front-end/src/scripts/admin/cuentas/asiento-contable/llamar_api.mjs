export const  llamar_api=(asiento)=>{
    const apiEndpoint = 'https://proactive-intuition-production-15d4.up.railway.app/registrar-asiento';
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(asiento)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    
    .catch((error) => {
        // console.error('Error:');
    });
}
