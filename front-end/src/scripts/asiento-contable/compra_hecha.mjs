import { llamar_api } from "./llamar_api.mjs";

export const compra_hecha=(compra)=>{
    

    const new_compra_banco = {
        cuenta: "Banco", // Cuenta 1
        cuenta2: "Mercaderia", // Cuenta 2
        debe: compra, // Lo que sale de la cuenta 1
        haber: 0, // Lo que entra a la cuenta 1
        debe2: 0, // Lo que sale de la cuenta 2 
        haber2: compra // Lo que entra en la cuenta 2
    };
    llamar_api(new_compra_banco)


}
