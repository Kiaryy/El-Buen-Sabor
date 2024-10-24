const mercadopago = new MercadoPago("APP_USR-d0a35451-8310-4881-9c3b-5bef7d2e25d5", {
    locale: "es-AR",
});

document.getElementById("checkout-btn").addEventListener("click", function () {
    const orderData = [{
        title:document.getElementById("product-title").innerHTML,
        quantity: document.getElementById("quantity").innerHTML,
        description: document.getElementById("product-description").innerHTML,
        price: document.getElementById("unit-price").innerHTML,
    }];

    fetch("http://localhost:8080/pedido/createPreference", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (preference) {
            console.log(preference.id)
            createCheckoutButton(preference.id);
        })
        .catch(function () {
            alert("Unexpected error");
        });
});

function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    const bricksBuilder = mercadopago.bricks();

    const renderComponent = async (bricksBuilder) => {
        if (window.checkoutButton) window.checkoutButton.unmount();
        await bricksBuilder.create(
            "wallet",
            "button-checkout", // class/id where the payment button will be displayed
            {
                initialization: {
                    preferenceId: preferenceId,
                },
                callbacks: {
                    onError: (error) => console.error(error),
                    onReady: () => {},
                },
            }
        );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
}