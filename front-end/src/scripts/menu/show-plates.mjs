// Selección de las secciones donde se mostrarán los productos
const section_hamburguesa = document.querySelector('#section-hamburguesa');
const section_pizza = document.querySelector('#section-pizza');
const section_empanada = document.querySelector('#section-empanada');
const section_ensalada = document.querySelector('#section-ensalada');
const section_acompañamiento = document.querySelector('#section-acompañamiento');
const section_postre = document.querySelector('#section-postre');

// Referencias al modal
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modal-img');
const modalName = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close');

// Al cargar la página
window.onload = async function () {
    console.log("Cargando productos...");

    // URL de la API para obtener los platos
    const url = 'https://bsapi-latest.onrender.com/platos/findAll';

    // Realizar la solicitud GET a la API
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Mapeamos las secciones a los tipos de comida
        const sectionMap = {
            HAMBURGUESA: section_hamburguesa,
            PIZZA: section_pizza,
            EMPANADA: section_empanada,
            ENSALADA: section_ensalada,
            ACOMPAÑANMIENTO: section_acompañamiento,
            POSTRE: section_postre
        };

        // Mostrar los productos en las respectivas secciones
        data.forEach(item => {
            // Verificar si existe una sección para el tipo de comida
            if (sectionMap[item.type]) {
                sectionMap[item.type].innerHTML += `
                    <div class="card-food" data-name="${item.name}" data-description="${item.description}" data-price="${item.price}">
                        <img alt="imagen comida" src="${item.img}">
                        <h5>${item.name}</h5>
                        <!-- Eliminar o comentar esta línea para ocultar el precio -->
                        <!-- <p>$${item.price}</p> -->
                    </div>
                `;
            }
        });
    } catch (error) {
        // Manejar errores
        console.error('Hubo un problema con la solicitud:', error);
    }
};

// Función para abrir el modal al hacer clic en una tarjeta de comida
document.addEventListener('click', function(event) {
    if (event.target.closest('.card-food')) {
        const card = event.target.closest('.card-food');
        const imgSrc = card.querySelector('img').src;
        const name = card.dataset.name;
        const description = card.dataset.description;
        const price = card.dataset.price;

        // Mostrar los datos en el modal
        modalImage.src = imgSrc;
        modalName.textContent = name;
        modalDescription.textContent = description;
        modalPrice.textContent = `$${price}`;

        // Mostrar el modal
        modal.style.display = "block";
    }
});

// Función para cerrar el modal al hacer clic en la 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Función para cerrar el modal al hacer clic fuera de la ventana modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
//------------------------------AGREGA---------------------------------------------------------
//  const nuevo_plato= {
//     name: 'Empanada de Carne',
//     description: 'Empanada rellena con carne picada',
//     type: 'EMPANADA',
//     price: 850,
//     stock: 25,
//     available: true,
//     img:"buea gil"
//  }

// fetch(add,{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json' // Especificamos que los datos están en formato JSON
//     },
    
//     body: JSON.stringify(nuevo_plato) // Convertimos los datos a formato JSON
// })
// .then(response => {
//     // Verificar si la respuesta fue exitosa
//     if (!response.ok) {
//     throw new Error('Error en la solicitud: ' + response.status);
//     }
//     // Convertir la respuesta a JSON
//     return response.json();
// })
// .then(data => {
//     // Mapeamos las secciones a los tipos de comida
// })

// .catch(error => {
//     // Manejar errores
//     console.error('Hubo un problema con la solicitud:', error);
// });