// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const sections = document.querySelectorAll(".content-section");

//     navLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();

//             navLinks.forEach(link => link.classList.remove('active'));

//             this.classList.add('active');

//             sections.forEach(section => section.classList.add('hide'));

//             const targetSection = this.getAttribute("data-target");
//             document.getElementById(targetSection).classList.remove('hide');
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    
    // Verificar si hay una sección activa guardada en localStorage
    const savedSection = localStorage.getItem("activeSection");

    if (savedSection) {
        // Si existe, quitar clase 'active' de todos los enlaces y 'hide' de todas las secciones
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.add('hide'));

        // Activar el enlace y la sección guardados
        document.querySelector(`.nav-link[data-target="${savedSection}"]`).classList.add('active');
        document.getElementById(savedSection).classList.remove('hide');
    } else {
        // Si no hay nada en localStorage, mostrar la primera sección por defecto
        navLinks[0].classList.add('active');
        sections[0].classList.remove('hide');
    }

    // Añadir evento de clic a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Quitar clase 'active' de todos los enlaces
            navLinks.forEach(link => link.classList.remove('active'));

            // Añadir clase 'active' al enlace actual
            this.classList.add('active');

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.add('hide'));

            // Mostrar la sección correspondiente al enlace actual
            const targetSection = this.getAttribute("data-target");
            document.getElementById(targetSection).classList.remove('hide');

            // Guardar la sección activa en localStorage
            localStorage.setItem("activeSection", targetSection);
        });
    });
});

