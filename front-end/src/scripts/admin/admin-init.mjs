import { platos } from "./mostrar/all-platos.mjs"; 
import { insumos } from "./mostrar/all-insumos.mjs";
import { personal } from "./mostrar/all-personal.mjs";
import { add_platos } from "./agregar/add-platos.mjs";
import { ver_cuenta } from "../asiento-contable/ver_cuenta.mjs";
import { venta_hecha } from "../asiento-contable/venta_hecha.mjs";
import { compra_hecha } from "../asiento-contable/compra_hecha.mjs";
import { compras } from "./mostrar/all-historial-compra.mjs";
import { ventas } from "./mostrar/all-historial-venta.mjs";
import { proveedores } from "./mostrar/all-provedores.mjs";
import { promociones } from "./mostrar/all-promociones.mjs";
import { bebidas } from "./mostrar/all-bebidas.mjs";
import { add_personal } from "./agregar/add-personal.mjs";
import { add_insumos } from "./agregar/add-insumos.mjs";
import { add_bebidas } from "./agregar/add-bebidas.mjs";
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
    platos: platos,
    compras:compras,
    ventas:ventas,
    personal:personal,
    insumos: insumos,
    // proveedores:proveedores,
    promociones:promociones,
    bebidas:bebidas
    // Agrega más funciones si las tienes
};

window.onload =async function () {

    
    for (let section of section_platos) { 
        if (funciones[section.id]) {
            if (section.id=="platos") {
                var url = 'https://proactive-intuition-production-15d4.up.railway.app/platos/simple';
            } 
            else if(section.id=="compras"){
                var url='https://proactive-intuition-production-15d4.up.railway.app/historypurchased/findAll'
            }
            else if(section.id=="ventas"){
                var url='https://proactive-intuition-production-15d4.up.railway.app/historySale/findAll'
            }
            
            else if(section.id=="personal"){
                var url='https://proactive-intuition-production-15d4.up.railway.app/employees/findAll'
            }
            
            else if(section.id=="insumos"){
                var url = 'https://proactive-intuition-production-15d4.up.railway.app/article/findAll';
            }
            else if(section.id=="promociones"){
                
                var url = 'https://proactive-intuition-production-15d4.up.railway.app/promotions/findAll';
            }
            else if(section.id=="bebidas"){
                
                var url = 'https://proactive-intuition-production-15d4.up.railway.app/bebidas/findAll';
            }
            
           const table=section.querySelector("table")
          
            
           funciones[section.id](url,table)
        }       
       
    
    
}
    add_personal
    add_bebidas
    add_platos
    add_insumos
}

