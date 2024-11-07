// Cargar datos del usuario al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarDatosUsuario();
});

// Función para hacer una solicitud GET al backend y obtener los datos del usuario
function cargarDatosUsuario() {
    // Obtener el ID del usuario desde el localStorage (o de la sesión si es más adecuado)
    const userId = localStorage.getItem('userId');  // Aquí debería estar el ID del usuario logueado

    if (!userId) {
        alert("No se encontró el usuario. Inicia sesión.");
        return;
    }

    // URL del endpoint para obtener los datos del usuario
    const url = `https://localhost:8080/usuarios/${userId}`; // Usar el ID del usuario

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los datos del usuario");
            }
            return response.json();
        })
        .then(usuario => {
            cargarFormulario(usuario);  // Cargar los datos del usuario en el formulario
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema al cargar los datos.");
        });
}

// Función para cargar los datos en el formulario HTML
function cargarFormulario(usuario) {
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("email").value = usuario.mail;
    document.getElementById("telefono").value = usuario.phoneNumber;
    document.getElementById("direccion").value = usuario.addresses;
}

// Función para habilitar la edición de los campos del formulario
function habilitarEdicion() {
    document.getElementById("nombre").removeAttribute("readonly");
    document.getElementById("email").removeAttribute("readonly");
    document.getElementById("telefono").removeAttribute("readonly");
    document.getElementById("direccion").removeAttribute("readonly");

    // Mostrar el botón "Guardar" y ocultar el botón "Editar"
    document.getElementById("btn-guardar").style.display = "inline";
    document.getElementById("btn-editar").style.display = "none";
}

// Función para enviar los datos actualizados al servidor
document.getElementById("form-datos-usuario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    const usuarioActualizado = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        direccion: document.getElementById("direccion").value
    };

    // Obtener el ID del usuario desde el localStorage
    const userId = localStorage.getItem('userId');  // Deberías tener este ID guardado

    if (!userId) {
        alert("No se pudo encontrar el usuario. Inicia sesión de nuevo.");
        return;
    }

    // URL del endpoint para actualizar datos del usuario
    const url = `https://localhost:8080/usuarios/${userId}`;

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuarioActualizado)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al actualizar los datos del usuario");
            }
            return response.json();
        })
        .then(data => {
            alert("Datos actualizados correctamente");

            // Deshabilitar los campos y mostrar el botón "Editar" nuevamente
            document.getElementById("nombre").setAttribute("readonly", "readonly");
            document.getElementById("email").setAttribute("readonly", "readonly");
            document.getElementById("telefono").setAttribute("readonly", "readonly");
            document.getElementById("direccion").setAttribute("readonly", "readonly");

            document.getElementById("btn-guardar").style.display = "none";
            document.getElementById("btn-editar").style.display = "inline";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un error al actualizar los datos.");
        });
});
