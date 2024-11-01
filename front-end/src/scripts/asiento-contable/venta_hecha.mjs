export const venta_hecha=(venta)=>{
    const new_compra_banco = {
        cuenta:'Banco',
        debe:0,
        haber:venta
    };
    llamar_api(new_compra_banco)
    
    
    const new_compra_costo_venta = {
        cuenta:'CostoVentas',
        debe:venta,
        haber:0
    };
    llamar_api(new_compra_costo_venta)
    
    console.log("venta hecha");
    
    
    // Create a JSON object to send
    
    
    
}
const llamar_api=(asiento)=>{
    const apiEndpoint = 'https://bsapi-latest.onrender.com/contabilidad/registrar-asiento';
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(asiento)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
  
    .catch((error) => {
        // console.error('Error:', error);
    });
}
