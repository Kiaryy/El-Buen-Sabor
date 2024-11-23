const section_promos = document.getElementById("section-promos");

export const show_promos=async ()=>{

        const url = 'http://localhost:8080/promotions/findAll';
    // const url = 'http://localhost:8080/promotions/findAll';

    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        

        data.forEach(item => {
                // Crear una lista de nombres de platos concatenados en una sola celda
                //const listPlato = item.platos.map(plate => plate.plateName).join(', ');
                //const listBebida = item.bebidas.map(plate => plate.plateName).join(', ');
            
            // Verificar si existe una sección para el tipo de comida
                
            section_promos.innerHTML += `
            <div class="card-promo" 
                 data-name="${item.name}" 
                 data-price="${item.precio}" 
                 data-platos='${JSON.stringify(item.platos)}' 
                 data-bebidas='${JSON.stringify(item.bebidas)}'>
                <img alt="imagen promocion" src="data:image/png;base64,${item.imageData}">
                <h5>${item.name}</h5>
            </div>
        `;
        
                    
                
    });
} catch (error) {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
}
}

