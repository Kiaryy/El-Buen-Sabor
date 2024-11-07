    // Obtener los elementos del DOM
    var modal = document.getElementById("modal-pagar");
    var btn = document.getElementById("pagar");
    var btn_salir = document.getElementById("seguir-comprando");
    
    const mercadopago = new MercadoPago("APP_USR-d0a35451-8310-4881-9c3b-5bef7d2e25d5", {
        locale: "es-AR",
    });
    document.getElementById("pagar").addEventListener("click", async () => {
            console.log("pagando..")
            const orderData = []    
            const liElements = document.querySelectorAll('.item-carrito');
            let id = 0
           
    
            liElements.forEach((li) => {
                const descriptionText = li.childNodes[0].textContent.trim();
                const quantity = parseInt(descriptionText.match(/x(\d+)/)?.[1]) || 1;
        
                const priceText = li.querySelector('span').textContent.trim();
                const price = parseFloat(priceText.replace("$", "")); 
                id++
                const itemData = {
                    title: descriptionText.split(" x")[0],
                    quantity: quantity,
                    price: price
                };
                console.log("Objeto itemData creado:", itemData);
    
                orderData.push(itemData);
            });

            const response = await fetch("http://localhost:8080/pedido/createPreference", {
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
        
            const preference = await response.json()
            createCheckoutButton(preference.id); 
        
    });
    
    const createCheckoutButton = (preferenceId) => {
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