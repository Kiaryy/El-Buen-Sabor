document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));

            this.classList.add('active');

            sections.forEach(section => section.classList.add('hide'));

            const targetSection = this.getAttribute("data-target");
            document.getElementById(targetSection).classList.remove('hide');
        });
    });
});

/* function editItem() {
    alert("Editar este elemento");
    // Lógica para editar el elemento
}

function deleteItem() {
    if (confirm("¿Estás seguro de que quieres eliminar este elemento?")) {
        alert("Elemento eliminado");
        // Lógica para eliminar el elemento
    }
}

function toggleStatus() {
    alert("Estado del elemento cambiado");
    // Lógica para habilitar/deshabilitar el elemento
}
 */
