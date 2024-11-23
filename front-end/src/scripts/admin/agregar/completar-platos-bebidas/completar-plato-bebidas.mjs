export const completarPlatosBebidasSelect= (platos, bebidas) => {


    const platoSelects = document.querySelectorAll('.plato-select');

    const bebidaSelects = document.querySelectorAll('.bebida-select');

    // Limpiar las opciones existentes
    platoSelects.forEach(select => {
        console.log(select);
        platos.forEach(plato => {
            const option = document.createElement('option');
            option.value = plato.id; // Asumiendo que cada plato tiene un ID
            option.textContent = plato.name; // Asumiendo que cada plato tiene un nombre
            select.appendChild(option);
        });
    });

    bebidaSelects.forEach(select => {
        bebidas.forEach(bebida => {
            const option = document.createElement('option');
            option.value = bebida.id; // Asumiendo que cada bebida tiene un ID
            option.textContent = bebida.name; // Asumiendo que cada bebida tiene un nombre
            select.appendChild(option);
        });
    });
}