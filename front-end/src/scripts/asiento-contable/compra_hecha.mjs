export const compra_hecha=(compra)=>{
    

    const new_compra_banco = {
        cuenta:'Banco',
        debe:compra,
        haber:0
    };
    llamar_api(new_compra_banco)
    const new_compra_inventario = {
        cuenta:'Inventario',
        debe:0,
        haber:compra,
    };
    
    llamar_api(new_compra_inventario)
    console.log("compra hecah");

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
        console.error('Error:');
    });
}
