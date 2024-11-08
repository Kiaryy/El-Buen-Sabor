export const articulosPLatos=(articulos) => {



    const articulosSelects = document.querySelectorAll('.articulo-select');



    // Limpiar las opciones existentes
    articulosSelects.forEach(select => {
        articulos.forEach(articulo => {

            const option = document.createElement('option');
            option.value = Number(articulo.id); // Asumiendo que cada articulo tiene un ID
            option.textContent = articulo.name; // Asumiendo que cada articulo tiene un nombre
            select.appendChild(option);
        });

    })
}