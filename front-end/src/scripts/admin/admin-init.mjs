
import { ver_cuenta } from "../asiento-contable/ver_cuenta.mjs";
import { venta_hecha } from "../asiento-contable/venta_hecha.mjs";
import { compra_hecha } from "../asiento-contable/compra_hecha.mjs";

import { obtenerDatos } from "./mostrar/mostrar.mjs";

const button_simu_venta=document.getElementById('simu-venta')
const button_simu_compra=document.getElementById('simu-compra')
const section_platos =document.querySelectorAll('.content-section')
const button_ver_cuentas=document.getElementById('ver-cuentas')


button_ver_cuentas.addEventListener('click',()=>{

    ver_cuenta()
    
    // const nombre_cuenta=document.getElementById('cuenta').value.toLowerCase()
    // if (nombre_cuenta!="") {

    // }
})

button_simu_compra.addEventListener('click',()=>{
    const venta=document.getElementById('precio')
    compra_hecha(venta.value)
})

button_simu_venta.addEventListener('click',()=>{
    const compra=document.getElementById('precio')
    venta_hecha(compra.value)
})
const funciones = {
    platos: 'platos',
    compras:'compras',
    ventas:'ventas',
    personal:'personal',
    insumos: 'insumos',
    proveedores:'proveedores',
    promociones:'promociones',
    bebidas:'bebidas'
    // Agrega más funciones si las tienes
};

window.onload =async function () {

    
    for (let section of section_platos) { 
        if (funciones[section.id]) {
            if (section.id=="platos") {
                var url = 'http://localhost:8080/platos/simple';
                // var url = 'https://proactive-intuition-production-15d4.up.railway.app/platos/simple';
                const table=section.querySelector("table")
                await obtenerDatos(funciones[section.id],url,table)
            } 
            // else if(section.id=="compras"){
            //     // var url='http://localhost:8080/historypurchased/findAll'
            //     var url='https://proactive-intuition-production-15d4.up.railway.app/historypurchased/findAll'
            // }
            // else if(section.id=="ventas"){
            //     // var url='http://localhost:8080/historySale/findAll'
            //     var url='https://proactive-intuition-production-15d4.up.railway.app/historySale/findAll'
            // }
            
            // else if(section.id=="personal"){
                
            //     // var url='http://localhost:8080/employees/findAll'
            //     var url='https://proactive-intuition-production-15d4.up.railway.app/employees/findAll'
               
            // }
            
            // if(section.id=="insumos"){
            //     // var url = 'http://localhost:8080/article/findAll';
            //     var url = 'https://proactive-intuition-production-15d4.up.railway.app/article/findAll';
             
                
            // }
            if(section.id=="promociones"){
                
                var url = 'http://localhost:8080/promotions/findAll';
                const table=section.querySelector("table")
                await obtenerDatos(funciones[section.id],url,table)
                // var url = 'https://proactive-intuition-production-15d4.up.railway.app/promotions/findAll';
            // }else if (section.id=="proveedores") {
            //     var url = 'https://proactive-intuition-production-15d4.up.railway.app/providers/findAll';
            //     // var url = 'http://localhost:8080/providers/findAll';
                
            }
            else if(section.id=="bebidas"){
                
                var url = 'http://localhost:8080/bebidas/findAll';
                // var url = 'https://proactive-intuition-production-15d4.up.railway.app/bebidas/findAll';
                const table=section.querySelector("table")
                await obtenerDatos(funciones[section.id],url,table)
            }
        
        }       
        
        
        
    }
   


  
}

