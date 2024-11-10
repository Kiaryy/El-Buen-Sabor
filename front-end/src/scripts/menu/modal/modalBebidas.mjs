let selectedBebida = null;

export const load_bebidas = async () => {
   const bebidasSelect = document.getElementById('add-bebida');
   const url = 'http://localhost:8080/bebidas/findAll';

   try {
       const response = await fetch(url);
       if (!response.ok) throw new Error('Error en la solicitud: ' + response.status);
       
       const data = await response.json();
       bebidasSelect.innerHTML = '<option value="">Seleccionar una bebida</option>';

       data.forEach(bebida => {
           const option = document.createElement('option');
           option.value = JSON.stringify({ name: bebida.nombre, price: bebida.precio });
           option.textContent = `${bebida.nombre} - $${bebida.precio}`;
           bebidasSelect.appendChild(option);
       });
   } catch (error) {
       console.error('Hubo un problema al cargar las bebidas:', error);
   }
};

// Maneja la selección de bebidas
export function handleBebidaSelect() {
   const bebidaSelect = document.getElementById('add-bebida');
   const selectedValue = bebidaSelect.value;

   if (selectedValue) {
       selectedBebida = JSON.parse(selectedValue);
       document.getElementById('bebida-quantity-control').style.display = 'flex';
       document.getElementById('selected-bebida-quantity').value = 0;
       updateTotalBebida();
   } else {
       document.getElementById('bebida-quantity-control').style.display = 'none';
   }
}

export function increaseBebidaQuantity() {
   const quantityInput = document.getElementById('selected-bebida-quantity');
   if (quantityInput) {
       let currentValue = parseInt(quantityInput.value, 10);
       quantityInput.value = currentValue + 1;
       updateTotalBebida();
   }
}

export function decreaseBebidaQuantity() {
   const quantityInput = document.getElementById('selected-bebida-quantity');
   if (quantityInput) {
       let currentValue = parseInt(quantityInput.value, 10);
       if (currentValue > 0) {
           quantityInput.value = currentValue - 1;
       }
       updateTotalBebida();
   }
}
//
export function updateTotalBebida() {
   const quantity = parseInt(document.getElementById('selected-bebida-quantity').value, 10);
   const total = selectedBebida ? quantity * selectedBebida.price : 0;
   document.querySelector('.btn-agregar-carrito').textContent = `Agregar al Carrito - TOTAL: $${total}`;
}

//