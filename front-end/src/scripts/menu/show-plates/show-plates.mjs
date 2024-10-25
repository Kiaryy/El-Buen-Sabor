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
const button_profile=document.getElementById('profile')



// Al cargar la página

window.onload = async function () {
    const profile = localStorage.getItem('profile');
        if (profile === 'true') {
            button_profile
            if (button_profile) {
                button_profile.innerHTML = 'Perfil';
                
            }
        }
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
        let qtyClasica = document.getElementById('opcion-clasica');
        let qtySinTacc = document.getElementById('opcion-sin-tacc');
        qtyClasica.value=0;
        qtySinTacc.value=0;
        document.querySelector('.btn-agregar-carrito').textContent = `Agregar al Carrito - TOTAL: $0`
        
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

// Función para aumentar la cantidad
function increaseQuantity(id) {
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
    updateTotal(); // Actualiza el total en el botón "Agregar al Carrito"
}

// Función para disminuir la cantidad
function decreaseQuantity(id) {
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    if (currentValue > 0) {
        inputField.value = currentValue - 1;
        updateTotal(); // Actualiza el total en el botón "Agregar al Carrito"
    }
}

// Función para actualizar el total en el botón "Agregar al Carrito"
function updateTotal() {
    const price = parseInt(modalPrice.textContent.replace('$',''));
    let qtyClasica = parseInt(document.getElementById('opcion-clasica').value);
    let qtySinTacc = parseInt(document.getElementById('opcion-sin-tacc').value);
    const total = price * (qtyClasica + qtySinTacc);
    console.log(total);
    
    document.querySelector('.btn-agregar-carrito').textContent = `Agregar al Carrito - TOTAL: $${total}`;
}
const button_add =document.querySelector('.btn-agregar-carrito')
const carrito=document.querySelector(".pedido ul")

button_add.addEventListener("click", () => {
    let name = modalName.textContent; // Nombre del producto del modal
    let qtyClasica = parseInt(document.getElementById('opcion-clasica').value);
    let qtySinTacc = parseInt(document.getElementById('opcion-sin-tacc').value);
    let total_price = qtyClasica + qtySinTacc;
    let priceFood = parseInt(button_add.textContent.replace('Agregar al Carrito - TOTAL: $', ''));
    
    if (total_price > 0) {
        // Verifica si el producto ya está en el carrito
        let existingItem = Array.from(carrito.querySelectorAll('.item-carrito')).find(item => 
            item.textContent.includes(name)
        );
        
        if (existingItem) {
            // Si ya existe, actualiza la cantidad y el precio
            alert("ya se a agregado al carrito")
        } else {
            // Si no existe, agrega un nuevo elemento al carrito
            let newItem = document.createElement("li");
            newItem.classList.add("item-carrito");
            newItem.innerHTML = `${name} x${total_price} <span>$${priceFood}</span>`;
            carrito.appendChild(newItem);
        }
    }
});












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