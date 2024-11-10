import { updateTotalCarrito } from "../modal/modalPlatos.mjs";

export let totalBebidas;
export let nombreBebidas;
export const load_bebidas = async () => {

    const bebidasSelect = document.getElementById('add-bebida');
    const url = 'http://localhost:8080/bebidas/findAll';
    //const url = 'http://localhost:8080/bebidas/findAll';

totalBebidas = 0;

    try {
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }

        const data = await response.json();

        // Limpiar las opciones actuales antes de agregar nuevas
        bebidasSelect.innerHTML = '<option value="">Seleccionar una bebida</option>';

        // Agregar las bebidas al select
        data.forEach(bebida => {
                  
            const option = document.createElement('option');
            option.value =JSON.stringify({ name: bebida.nombre, price: bebida.precio });
            option.textContent = `${bebida.nombre} - $${bebida.precio}`;
            bebidasSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Hubo un problema al cargar las bebidas:', error);
    }
};
const bebidasSelect = document.getElementById('add-bebida');

// Escucha el cambio de selección
bebidasSelect.addEventListener('change', () => {
    // Obtén el valor del 'option' seleccionado y conviértelo en objeto
    const selectedOption = bebidasSelect.value;
    const bebida = JSON.parse(selectedOption);

    // Accede a los datos de la bebida
    nombreBebidas = bebida.name;


    // Ahora puedes usar `nombre` y `precio` como necesites
    console.log(`Nombre: ${nombreBebidas}`);
});

let selectedBebida = null;

function handleBebidaSelect() {
    const bebidaSelect = document.getElementById('add-bebida');
    const selectedValue = bebidaSelect.value;

    if (selectedValue) {
        selectedBebida = JSON.parse(selectedValue);
        
        // Mostrar el control de cantidad
        const quantityControl = document.getElementById('bebida-quantity-control');
        quantityControl.style.display = 'flex';
        const quantityInput = document.getElementById('opcion-bebidas');
        quantityInput.value = 0;

        // Agregar eventos a los botones solo si el control está visible
        // document.querySelector('#bebida-quantity-control .more').addEventListener('click', increaseQuantity);
        // document.querySelector('#bebida-quantity-control .less').addEventListener('click', decreaseQuantity);
    } else {
        // document.getElementById('bebida-quantity-control').style.display = 'none';
    }
}



// Exponer la función al contexto global
window.handleBebidaSelect = handleBebidaSelect;




function increaseQuantityBebida() {
    const quantityInput = document.getElementById('opcion-bebidas');
    console.log(quantityInput);
    
    // Verificar si el elemento existe antes de acceder a su valor
    if (quantityInput) {
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
        updateTotal();
    } else {
        console.error("No se pudo encontrar el input de cantidad.");
    }
}

// Exponer la función al contexto global
window.increaseQuantityBebida = increaseQuantityBebida;

function decreaseQuantityBebida() {
    const quantityInput = document.getElementById('opcion-bebidas');
    
    // Verificar si el elemento existe antes de acceder a su valor
    if (quantityInput) {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
        }
        updateTotal();
    } else {
        console.error("No se pudo encontrar el input de cantidad.");
    }
}

// Exponer la función al contexto global
window.decreaseQuantityBebida = decreaseQuantityBebida;

function updateTotal() {
    const quantity = parseInt(document.getElementById('opcion-bebidas').value, 10);
    const bebidaPrice = selectedBebida && !isNaN(selectedBebida.price) ? parseFloat(selectedBebida.price) : 0;
    totalBebidas += quantity * bebidaPrice; // Calcula el subtotal de las bebidas
   
    
    updateTotalCarrito(); // Llama a la función que actualiza el total combinado
}
window.updateTotal = updateTotal; // Asegúrate de que esta función esté disponible globalmente



window.updateTotal = updateTotal;

// let button_add = document.querySelector('.btn-agregar-carrito');
// const carritoPlato = document.querySelector("#pedido ul");
// let shopping_cart = 0;

// button_add.addEventListener("click", () => {
//     let name = document.querySelector(".opcion-bebidas").value; 
//     let qtyBebida = parseInt(document.getElementById('opcion-bebidas').value); // Cantidad seleccionada
//     // let priceBebida = parseInt(document.getElementById('opcion-bebidas').value); // Cantidad seleccionada
//     let pricePlato = parseInt(modalPriceFood.textContent.replace('Precio: $', ''));
//     console.log(pricePlato);
    
//     let total_price_plato = (pricePlato * qtyBebida); 
//         // Verifica si el producto ya está en el carrito
//         let existingItem = Array.from(carritoPlato.querySelectorAll('.item-carrito')).find(item => 
//             item.textContent.includes(name)
//         );
//         if (existingItem) {
//             showToast('Ya tenes el plato en el carrito', 2500);
            
//         }else{        
//             let newItem = document.createElement("li");
//             newItem.classList.add("item-carrito");
//             newItem.innerHTML = `${name} x${qtyBebida} <span>$${total_price_plato}</span>`;
//             shopping_cart += total_price_plato;
//             carritoPlato.appendChild(newItem);
//             update_cart_plato(shopping_cart);
//             showToast('Producto agregado al carrito correctamente', 1500);
//         }
    
// });



