// Obtener los elementos del DOM
var modal = document.getElementById("modal-pagar");
var btn = document.getElementById("pagar");
var btn_salir = document.getElementById("seguir-comprando");

// Cuando se presiona el botón, se muestra el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario presiona la "X", se cierra el modal
btn_salir.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}

const mp = new MercadoPago("", {
    locale: "es-AR",
})

mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "<PREFERENCE_ID>",
    },
    customization: {
        texts: {
            valueProp: 'smart_option',
        },
    },
});

