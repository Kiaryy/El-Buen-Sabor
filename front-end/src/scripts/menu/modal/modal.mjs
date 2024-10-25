
// Referencias al modal
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modal-img');
const modalName = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close');
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
    
    document.querySelector('.btn-agregar-carrito').textContent = `Agregar al Carrito - TOTAL: $${total}`;
}
const button_add =document.querySelector('.btn-agregar-carrito')
const carrito=document.querySelector(".pedido ul")
let shopping_cart=0

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
            shopping_cart+=priceFood
            carrito.appendChild(newItem);
            update_cart(shopping_cart)
        }
    }
});

let total_carrito=document.getElementById('total-pedido')
function update_cart (total){

    total_carrito.textContent.replace('TOTAL: $','');
    total_carrito.innerHTML=`TOTAL: $${total}`;

}


