import { llamar_api } from "./llamar_api.mjs";
//Funcion que construye el objeto del asiento
export const compra_hecha=(compra,tipo)=>{
    const idProveedor=document.getElementById('nombre_proveedor').value;
   
    if (idProveedor=="NOMBRE DEL PROVEEDOR") {
        alert("ingrese el proveedor ")
        return false
    }
    if (tipo=="EFECTIVO") {
        var tipo_cuenta="Efectivo"
    }else if (tipo=="TRANSFERENCIA") {
        var tipo_cuenta="Banco"
        
    }else if(tipo=="METODO PAGO"){
        alert("elija el metodo de pago")
        return false
    }
    
    else{
        var tipo_cuenta="Crypto"
        
    } 
    
    const new_compra_banco = {
        cuenta: tipo_cuenta, // Cuenta 1
        cuenta2: "Mercaderia", // Cuenta 2
        debe: compra, // Lo que sale de la cuenta 1
        haber: 0, // Lo que entra a la cuenta 1
        debe2: 0, // Lo que sale de la cuenta 2 
        haber2: compra // Lo que entra en la cuenta 2
    };
    //lama a la funcion para subir a la base
    llamar_api(new_compra_banco)
    location.reload()

}
