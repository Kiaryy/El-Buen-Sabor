async function there_is_email(mail) {
    try {
        const response = await fetch('http://localhost:8080/usuarios/findAll', {
            method: 'GET'
        });

        // Verifica la respuesta en formato de texto antes de convertirla a JSON
        const rawData = await response.text();
       

        // Intenta convertir el texto en JSON
       
        const data = JSON.parse(rawData);
        for (let user of data) {
            if (user.mail === mail) {
                return user.pedido || [];
            }
        }

        return [];
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        return [];
    }
}

window.onload = async function () {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    const userIndex = users.findIndex(user => user.state === true);

    if (userIndex === -1) {
        console.error("No se encontró un usuario con el estado `true` en localStorage.");
        return;
    }

    const email = users[userIndex].mail;
    const pedidos = await there_is_email(email);



    // Selecciona el elemento de la lista
    const listaPedidos = document.getElementById("lista-pedidos");

    if (pedidos.length === 0) {
        // Si no hay pedidos, muestra un mensaje en la lista
        listaPedidos.innerHTML = '<li class="mensaje-sin-pedidos">Aún no realizaste ningún pedido.</li>';
    } else {
        // Si hay pedidos, los muestra
        pedidos.forEach(pedido => {
            const pedidoItem = document.createElement("li");
        
            
            const plato= pedido.platos.map(plate => plate.plateName).join(', ');
            const date = new Date(pedido.dateCreated);
            const date2 = new Date(pedido.dateArrived);
            let spanEnvio = ``
            if (date.getTime() < date2) {
                spanEnvio = `Llega aproximadamente a las: <u>${date2.getHours().toString().padStart(2, '0')}:${date2.getMinutes().toString().padStart(2, '0')}</u>`
            } else {
                spanEnvio = `<u>Entregado</u>`
            }
            
            pedidoItem.innerHTML = ` <span>-Pedido de la fecha #${date.getFullYear().toString().padStart(2, '0')}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}</span><br>
                <span>- Productos: ${plato} </span><br>
                <span>- Nombre del repartidor: ${pedido.nombreDelivery}</span><br>
                <span>- ${spanEnvio}</span><br>
            `;
        
            listaPedidos.appendChild(pedidoItem);
        });
    }
}


// Cargar datos del usuario al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarDatosUsuario();
});

// Función para hacer una solicitud GET al backend y obtener los datos del usuario
function cargarDatosUsuario() {
    // Obtener el ID del usuario desde el localStorage (o de la sesión si es más adecuado)
 // Aquídebería estar el ID del usuario logueado
    // URL del endpoint para obtener los datos del usuario
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    

// Buscar el usuario que tenga el 'state' en true
    const activeUser = users.find(user => user.state === true);
    cargarFormulario(activeUser)
}

// Función para cargar los datos en el formulario HTML
function cargarFormulario(usuario) {
    document.getElementById("nombre").value = usuario.name;
    document.getElementById("email").value = usuario.mail;
    document.getElementById("contraseña").value = usuario.passWord;
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
        name: document.getElementById("nombre").value,
        passWord:document.getElementById("contraseña").value,
        mail: document.getElementById("email").value,
        phoneNumber: document.getElementById("telefono").value,
        addresses:document.getElementById("direccion").value.split(",").map(direccion => direccion.trim())
    };
    console.log(usuarioActualizado);
    
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    const userIndex = users.findIndex(user => user.state === true);
    const id=users[userIndex].id
    console.log(id);
    
    // URL del endpoint para actualizar datos del usuario
    const url = `http://localhost:8080/usuarios/${id}`;

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
          
            users[userIndex].name= document.getElementById("nombre").value
            users[userIndex].mail= document.getElementById("email").value,
            users[userIndex].phoneNumber=  document.getElementById("telefono").value,
            users[userIndex].addresses= document.getElementById("direccion").value
            users[userIndex].passWord= document.getElementById("contraseña").value
            localStorage.setItem("Users", JSON.stringify(users));
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
