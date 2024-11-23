//
//
//// Botón para activar el modo de edición del carrito
//const editCartButton = document.getElementById('editar-carrito');
//let editMode = false; // Variable para saber si el modo de eliminación está activo
//
//// Evento para activar/desactivar el modo de edición del carrito
//editCartButton.addEventListener('click', () => {
//    editMode = !editMode; // Cambia el estado del modo de edición
//    if (editMode) {
//        showToast('Selecciona un elemento para eliminar', 2000);
//        carritoPromo.classList.add('edit-mode'); // Agrega una clase para indicar el modo de edición, si lo deseas para estilos CSS
//    } else {
//        carritoPromo.classList.remove('edit-mode');
//    }
//});
//
//// Evento para eliminar un artículo al hacer clic en él, si el modo de edición está activo
//carritoPromo.addEventListener('click', (event) => {
//    if (editMode && event.target.classList.contains('item-carrito')) {
//        const itemToDelete = event.target;
//
//        // Obtener el precio total del artículo (extraer el número de la etiqueta <span>)
//        const priceText = itemToDelete.querySelector('span').textContent.replace('$', '').trim();
//        const itemPrice = parseFloat(priceText);
//
//        // Restar el precio del artículo eliminado del total del carrito
//        shopping_cart_promo -= itemPrice;
//        
//        // Asegurarse de que el total no sea negativo
//        if (shopping_cart_promo < 0) shopping_cart_promo = 0;
//
//        // Actualizar el total en la interfaz
//        update_cart_promo(shopping_cart_promo);
//        
//        // Eliminar el elemento del carrito
//        itemToDelete.remove();
//        
//        showToast('Elemento eliminado del carrito', 1500);
//    }
//});
//
//
////notificaciones
//function showToast(message, duration = 3000) {
//    const toast = document.getElementById('toast-notification');
//    const toastMessage = document.getElementById('toast-message');
//    
//    toastMessage.textContent = message; // Establece el mensaje
//    toast.classList.add('show');
//    
//    // Quitar la notificación después del tiempo especificado
//    setTimeout(() => {
//        toast.classList.add('hide'); // Añade clase para iniciar animación de salida
//    }, duration - 500); // Restamos 500 ms para iniciar la animación antes
//    
//    // Ocultar completamente después de la animación
//    setTimeout(() => {
//        toast.classList.remove('show', 'hide');
//    }, duration);
//}