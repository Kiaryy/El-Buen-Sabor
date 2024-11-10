
const binancePayButton = document.getElementById("binance-pay-button");
const modalPagar = document.getElementById("modal-pagar");
const modalCrypto = document.getElementById("modal-crypto");
const closeCryptoModalButton = document.getElementById("close-crypto-modal");
const currencySelector = document.getElementById("currency-selector");
const confirmPaymentButton = document.getElementById("confirm-payment");

binancePayButton.addEventListener("click", () => {
    console.log("dsadchoal")

    // Cerrar anterior modal
    modalPagar.style.display = "none";
    
    // Obtener el total del pedido
    const totalPedidoText = document.getElementById("total-pedido").textContent;
    total = parseFloat(totalPedidoText.replace("TOTAL: $", ""));

    // Actualizar y mostrar el total en el modal de criptomonedas
    const cryptoAmount = document.getElementById("crypto-amount");
    cryptoAmount.textContent = `Total: $${total.toFixed(2)}`;
    // Abrir actual
    modalCrypto.style.display = "block";
});

closeCryptoModalButton.addEventListener("click", () => {
    // Cerrar el modal de criptomonedas
    modalCrypto.style.display = "none";
    
    // Reabrir el modal original (si lo deseas)
    modalPagar.style.display = "block";
});
confirmPaymentButton.addEventListener("click", () => {
    const selectedCurrency = currencySelector.value;

    binancePay({
        total: total,
        merchantTradeNo: "15678343",
        currency: selectedCurrency
    });
});





 function binancePay ({ total, merchantTradeNo, currency} ){

    confirmPaymentButton.addEventListener("click",async () => {
        
        document.getElementById("modal-crypto").style.display = "none";
 
        const totalTransformado=await convertirDePesosACriptomonedas(total,currency)
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        let counter = 0;
        while (counter < 25) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter += 1;
          }
        const paymentData = {
            merchantTradeNo: result,   
            orderAmount: totalTransformado,           
            currency: currency,
            message: "El buen Sabor"
        };
        console.log(paymentData);
      
        fetch("http://localhost:8080/binance/create", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paymentData)
        })
        .then(response => response.json())
        .then(res => {
                console.log(res);
                
                const urlCrypto = res.data.checkoutUrl
                window.open(urlCrypto)

            alert("Pago confirmado con éxito.");
        })
        .catch(error => {
            console.error("Error en el pago:", error);
            alert("Hubo un error al procesar el pago.");
        });

    });
    }


    async function convertirDePesosACriptomonedas(montoARS,tipo) {
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd,ars';
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (tipo=="USDT") {
                const precioUSDTenUSD = data.tether.usd;
                const usdToArsRate = data.tether.ars;
                const montoUSD = montoARS / usdToArsRate;
                var total = montoUSD / precioUSDTenUSD;
            }else if(tipo=="BTC"){

                const precioBTCenUSD = data.bitcoin.usd;
                const usdToArsRate = data.tether.ars;
                const montoUSD = montoARS / usdToArsRate;
                var total = montoUSD / precioBTCenUSD;
            }else{

                const precioETHenUSD = data.ethereum.usd;
                const usdToArsRate = data.tether.ars;
                const montoUSD = montoARS / usdToArsRate;
                var total = montoUSD / precioETHenUSD;
            }
            return total
     
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }