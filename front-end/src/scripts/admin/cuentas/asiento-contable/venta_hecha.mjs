import { llamar_api } from "./llamar_api.mjs";

export const venta_hecha=(venta)=>{
    const new_ventaa_banco = {
        cuenta: "Banco", // Cuenta 1
        cuenta2: "Mercaderia", // Cuenta 2
        debe: 0, // Lo que sale de la cuenta 1
        haber: venta, // Lo que entra a la cuenta 1
        debe2: venta, // Lo que sale de la cuenta 2 
        haber2: 0 // Lo que entra en la cuenta 2
    };
    llamar_api(new_ventaa_banco)
    // Create a JSON object to send
    
    
    
}
