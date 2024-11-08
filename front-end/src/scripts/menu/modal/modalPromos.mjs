// Referencias a los elementos del modal de promociones
const promosModal = document.getElementById('promosModal');
const modalImagePromo = promosModal.querySelector('#modal-img');
const modalNamePromo = promosModal.querySelector('#modal-title');
const modalDescriptionPromo = promosModal.querySelector('#modal-description');
const modalPricePromo = promosModal.querySelector('#modal-price-promo');
const platosListPromo = document.getElementById("platos-promo");
const bebidasListPromo = document.getElementById("bebidas-promo");

// Evento para abrir el modal de promociones al hacer clic en una tarjeta de promo
document.addEventListener('click', function(event) {
    if (event.target.closest('.card-promo')) { 
        const promoCard = event.target.closest('.card-promo');
        
        const promoName = promoCard.dataset.name;
        const promoPrice = promoCard.dataset.price;
        const promoImage = promoCard.querySelector('img').src;
        const promoPlatos = JSON.parse(promoCard.dataset.platos);
        const promoBebidas = JSON.parse(promoCard.dataset.bebidas);

        // Cargar los datos de la promo en el modal
        modalImagePromo.src = promoImage;
        modalNamePromo.textContent = promoName;
        modalDescriptionPromo.textContent = ''; 
        modalPricePromo.textContent = `Precio: $${promoPrice}`;

        // Cargar la lista de platos de la promoción
        platosListPromo.innerHTML = ""; // Limpiar contenido previo
        promoPlatos.forEach(plato => {
            const li = document.createElement("li");
            li.innerText = plato.plateName; // Confirmá que este campo sea correcto
            platosListPromo.appendChild(li);
        });

        // Cargar la lista de bebidas de la promoción
        bebidasListPromo.innerHTML = ""; // Limpiar contenido previo
        promoBebidas.forEach(bebida => {
            const li = document.createElement("li");
            li.innerText = bebida.plateName; // Confirmá que este campo sea correcto
            bebidasListPromo.appendChild(li);
        });

        // Mostrar el modal de promociones después de cargar los datos
        promosModal.style.display = "block";
    }
});

// Cerrar el modal de promociones
const closePromoModal = promosModal.querySelector('.close');
closePromoModal.onclick = function() {
    promosModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === promosModal) {
        promosModal.style.display = "none";
    }
};

// Funciones de aumentar/disminuir cantidad y actualizar el total en el modal de promociones
function increaseQuantityPromo(id) {
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
    updateTotalPromo(); // Actualiza el total en el botón "Agregar al Carrito"
}

function decreaseQuantityPromo(id) {
    const inputField = document.getElementById(id);
    let currentValue = parseInt(inputField.value);
    if (currentValue > 0) {
        inputField.value = currentValue - 1;
        updateTotalPromo(); 
    }
}

function updateTotalPromo() {
    const price = parseInt(modalPricePromo.textContent.replace('Precio: $', ''));
    let qtyPromo = parseInt(document.getElementById('opcion-promo').value); // Asegurate de que el id de cantidad sea correcto
    let total = price * qtyPromo;
    document.querySelector('.btn-agregar-carrito-promo').textContent = `Agregar al Carrito - TOTAL: $${total}`;
}

// Agregar al carrito
let button_add_promo = document.querySelector('.btn-agregar-carrito-promo');
const carritoPromo = document.querySelector("#pedido ul");
let shopping_cart_promo = 0;

button_add_promo.addEventListener("click", () => {
    let name = modalNamePromo.textContent; // Nombre de la promo del modal
    let qtyPromo = parseInt(document.getElementById('opcion-promo').value); // Cantidad seleccionada
    let pricePromo = parseInt(modalPricePromo.textContent.replace('Precio: $', ''));
    let total_price_promo = pricePromo * qtyPromo; // El precio total de la cantidad seleccionada

    if (qtyPromo > 0) {
        // Verifica si el producto ya está en el carrito
        let existingItem = Array.from(carritoPromo.querySelectorAll('.item-carrito')).find(item => 
            item.textContent.includes(name)
        );
        
        if (existingItem) {
            // Si ya existe
            showToast('Ya tenes la promo en tu carrito', 2500);
        } else {
            // Si no existe, agrega un nuevo elemento al carrito
            let newItem = document.createElement("li");
            newItem.classList.add("item-carrito");
            newItem.innerHTML = `${name} x${qtyPromo} <span>$${total_price_promo}</span>`;
            shopping_cart_promo += total_price_promo;
            carritoPromo.appendChild(newItem);
            update_cart_promo(shopping_cart_promo);
            showToast('Producto agregado al carrito correctamente', 1500);
        }
    }
});

// Función para actualizar el total en el carrito
let total_carrito_promo = document.getElementById('total-pedido');
function update_cart_promo(total) {
    total_carrito_promo.innerHTML = `TOTAL: $${total}`;
}

// Función de notificaciones
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message; // Establece el mensaje
    toast.classList.add('show');
    
    // Quitar la notificación después del tiempo especificado
    setTimeout(() => {
        toast.classList.add('hide'); // Añade clase para iniciar animación de salida
    }, duration - 500); // Restamos 500 ms para iniciar la animación antes
    
    // Ocultar completamente después de la animación
    setTimeout(() => {
        toast.classList.remove('show', 'hide');
    }, duration);
}

// Implementación de la lógica para eliminar un producto del carrito
const editCartButton = document.getElementById('edit-cart-button'); // Botón para activar el modo de edición
let editMode = false; // Variable para saber si el modo de eliminación está activo

// Evento para activar/desactivar el modo de edición del carrito
editCartButton.addEventListener('click', () => {
    editMode = !editMode; // Cambia el estado del modo de edición
    if (editMode) {
        showToast('Selecciona un elemento para eliminar', 2000);
        carritoPromo.classList.add('edit-mode'); // Clase opcional para estilo
    } else {
        carritoPromo.classList.remove('edit-mode');
    }
});

// Evento para eliminar un artículo al hacer clic en él, si el modo de edición está activo
carritoPromo.addEventListener('click', (event) => {
    if (editMode && event.target.classList.contains('item-carrito')) {
        const itemToDelete = event.target;
        
        // Obtener el precio del artículo que se va a eliminar
        const priceText = itemToDelete.querySelector('span').textContent.replace('$', '');
        const itemPrice = parseInt(priceText);
        
        // Restar el precio del artículo eliminado del total del carrito
        shopping_cart_promo -= itemPrice;
        update_cart_promo(shopping_cart_promo);
        
        // Eliminar el elemento del carrito
        itemToDelete.remove();
        
        showToast('Elemento eliminado del carrito', 1500);
    }
});
