import { updateTotalCarrito } from "../modal/modalPlatos.mjs";

export let totalBebidas;
export const load_bebidas = async () => {

    const bebidasSelect = document.getElementById('add-bebida');
    const url = 'https://proactive-intuition-production-15d4.up.railway.app/bebidas/findAll';
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
            console.log(bebida);            
            const option = document.createElement('option');
            option.value =JSON.stringify({ name: bebida.nombre, price: bebida.precio });
            option.textContent = `${bebida.nombre} - $${bebida.precio}`;
            bebidasSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Hubo un problema al cargar las bebidas:', error);
    }
};

let selectedBebida = null;

function handleBebidaSelect() {
    const bebidaSelect = document.getElementById('add-bebida');
    const selectedValue = bebidaSelect.value;

    if (selectedValue) {
        selectedBebida = JSON.parse(selectedValue);
        
        // Mostrar el control de cantidad
        const quantityControl = document.getElementById('bebida-quantity-control');
        quantityControl.style.display = 'flex';
        const quantityInput = document.getElementById('selected-bebida-quantity');
        quantityInput.value = 0;

        // Agregar eventos a los botones solo si el control está visible
        document.querySelector('#bebida-quantity-control .more').addEventListener('click', increaseQuantity);
        document.querySelector('#bebida-quantity-control .less').addEventListener('click', decreaseQuantity);
    } else {
        document.getElementById('bebida-quantity-control').style.display = 'none';
    }
}



// Exponer la función al contexto global
window.handleBebidaSelect = handleBebidaSelect;


function increaseQuantity() {
    const quantityInput = document.getElementById('selected-bebida-quantity');
    
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
window.increaseQuantity = increaseQuantity;

function decreaseQuantity() {
    const quantityInput = document.getElementById('selected-bebida-quantity');
    
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
window.decreaseQuantity = decreaseQuantity;

function updateTotal() {
    const quantity = parseInt(document.getElementById('selected-bebida-quantity').value, 10);
    const bebidaPrice = selectedBebida && !isNaN(selectedBebida.price) ? parseFloat(selectedBebida.price) : 0;
    totalBebidas += quantity * bebidaPrice; // Calcula el subtotal de las bebidas
    updateTotalCarrito(); // Llama a la función que actualiza el total combinado
}
window.updateTotal = updateTotal; // Asegúrate de que esta función esté disponible globalmente



window.updateTotal = updateTotal;





