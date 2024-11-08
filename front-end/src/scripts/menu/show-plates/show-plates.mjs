import { show_promos } from "./show-promos/show-promos.mjs";

export const show_plates = async(sectionMap)=>{

    //const url = ' http://localhost:8080/platos/findAll';
    const url = 'https://proactive-intuition-production-15d4.up.railway.app/platos/findAll';
    show_promos();
    load_plates(sectionMap,url);
    
    // }
}

const load_plates=async (sectionMap,url)=>{
    loader.style.display = 'block';

    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Mapeamos las secciones a los tipos de comida+
        // Mostrar los productos en las respectivas secciones
        // var plates_new=[]
        
        data.forEach(item => {
          
            
            // Verificar si existe una sección para el tipo de comida
            if (sectionMap[item.type]) {
                
                    sectionMap[item.type].innerHTML += `
                    <div class="card-food" data-name="${item.name}" data-description="${item.description}" data-price="${item.price}">
                    <img alt="imagen comida" src="data:image/png;base64,${item.imageData}">
                    <h5>${item.name}</h5>
                    </div>
                    `;

                }

    });
} catch (error) {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
}finally {
            // Ocultar la animación de carga
            loader.style.display = 'none';
        }
}
