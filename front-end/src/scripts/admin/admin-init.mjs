import { platos } from "./mostrar/all-platos.mjs"; 
import { insumos } from "./mostrar/all-insumos.mjs";
import { personal } from "./mostrar/all.personal.mjs";
import { add_platos } from "./agregar/add-platos.mjs";
import { ver_cuenta } from "../asiento-contable/ver_cuenta.mjs";
import { venta_hecha } from "../asiento-contable/venta_hecha.mjs";
import { compra_hecha } from "../asiento-contable/compra_hecha.mjs";

const button_simu_venta=document.getElementById('simu-venta')
const button_simu_compra=document.getElementById('simu-compra')
const section_platos =document.querySelectorAll('.content-section')
const button_ver_cuentas=document.getElementById('ver-cuentas')


button_ver_cuentas.addEventListener('click',()=>{
    console.log("g");
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
    insumos: insumos,
    personal:personal
    // Agrega más funciones si las tienes
};

window.onload =async function () {

    
    for (let section of section_platos) { 
        if (funciones[section.id]) {
            if (section.id=="platos") {
                var url = 'https://bsapi-latest.onrender.com/platos/simple';
            }else if(section.id=="insumos"){
                var url = 'https://bsapi-latest.onrender.com/article/findAll';
            }else if(section.id=="personal"){
                var url = 'https://bsapi-latest.onrender.com/employees/findAll';

            }
            const table=section.querySelector("table")
          
            
            funciones[section.id](url,table)
        }       
       
    
    
}
    add_platos
}

