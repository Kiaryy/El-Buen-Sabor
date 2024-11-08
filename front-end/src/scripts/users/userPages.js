
//Logica para mostrar las secciones
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".container-content");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Elimina la clase 'active' de todos los enlaces de navegación
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Oculta todas las secciones
            sections.forEach(section => section.classList.add('hide'));

            // Muestra la sección objetivo
            const targetSection = this.getAttribute("data-target");
            document.getElementById(targetSection).classList.remove('hide');
        });
    });
});



// Lógica para las preguntas frecuentes
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Cierra otras respuestas
        faqQuestions.forEach(q => {
            const answer = q.nextElementSibling; // La respuesta es el siguiente elemento
            if (q !== question) {
                answer.style.display = 'none'; //Se oculta la respuesta
            }
        });

        // Alterna la respuesta de la pregunta actual
        const answer = question.nextElementSibling;
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block'; // Muestra la respuesta
        } else {
            answer.style.display = 'none'; // Oculta la respuesta
        }
    });
});

// Función para habilitar la edición de datos
function habilitarEdicion() {
    const inputs = document.querySelectorAll("#form-datos-usuario input");
    inputs.forEach(input => input.removeAttribute('readonly'));
    document.getElementById("btn-guardar").style.display = 'inline'; // Muestra el botón de guardar
    document.getElementById("btn-editar").style.display = 'none';
}
