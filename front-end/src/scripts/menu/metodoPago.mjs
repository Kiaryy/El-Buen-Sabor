// Obtener los elementos del DOM
var modal = document.getElementById("modal-pagar");
var btn = document.getElementById("pagar");
var btn_salir = document.getElementById("seguir-comprando");

// const mp = new MercadoPago("PUBLIC-KEY", {
//     locale: "es-AR",
// })

document.getElementById("pagar").addEventListener("click", async () => {
    try{
        const orderData = {
            title: "BuenSabor",
            quanty: 1,
            price: 1000,
        };
    
        const response = await fetch("https://localhost:3000/create-preferences", {
            method: "POST",
            headers: {
                "Content-Type": "aplication/jason",s
            },
            body: JSON.stringify(orderData),
        });
    
        const preference = await response.json()
        createCheckoutButton(preference.id); 
    } catch(error){
        alert("error");
    }
});

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if (window.checkoutButton) window.checkoutButton.unmount();
        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId,
            },  
        });
    };
    renderComponent();
};

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




