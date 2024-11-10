import { venta_hecha } from "./cuentas/asiento-contable/venta_hecha.mjs"; 
import { compra_hecha } from "./cuentas/asiento-contable/compra_hecha.mjs";
import { obtenerDatos } from "./mostrar/mostrar.mjs";
import { proveedores_nombre } from "./mostrar/mostrar.mjs";
import { obtener_nombre_proveedor } from "./agregar/obtener-provedores/obtener_proveedores.mjs";

const button_simu_venta=document.getElementById('simu-venta')
const button_simu_compra=document.getElementById('simu-compra')
const section_platos =document.querySelectorAll('.content-section')

const button_empezar_compra=document.getElementById('empezar_compra')
const section_proveedor_comprar=document.getElementById('section_comprar_proveedor')

button_empezar_compra.addEventListener('click',()=>{
    if (section_proveedor_comprar.classList.contains("hide")) {
        
        section_proveedor_comprar.classList.remove("hide")
        obtener_nombre_proveedor()
    }else{
        section_proveedor_comprar.classList.add("hide")

    }
})
button_simu_compra.addEventListener('click',()=>{
    const selectElement = document.getElementById('nombre_proveedor');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
   
    
    const precio = selectedOption.getAttribute('data-precio');
    const tipo=document.getElementById('metodo_pago')
    compra_hecha(Number(precio),tipo.value)
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
                // var url = 'http://localhost:8080/platos/simple';
                var url = 'http://localhost:8080/platos/simple';
            
            } 
            else if(section.id=="compras"){
                // var url='http://localhost:8080/historypurchased/findAll'
                var url='http://localhost:8080/historypurchased/findAll'
            }
            else if(section.id=="ventas"){
                // var url='http://localhost:8080/historySale/findAll'
                var url='http://localhost:8080/historySale/findAll'
            }
            
            else if(section.id=="personal"){
                
                // var url='http://localhost:8080/employees/findAll'
                var url='http://localhost:8080/employees/findAll'
            
            }
            
            if(section.id=="insumos"){
                // var url = 'http://localhost:8080/article/findAll';
                var url = 'http://localhost:8080/article/findAll';
            

            }
            if(section.id=="promociones"){
                
                // var url = 'http://localhost:8080/promotions/findAll';

                var url = 'http://localhost:8080/promotions/findAll';
            }else if (section.id=="proveedores") {
                var url = 'http://localhost:8080/providers/findAll';
                // var url = 'http://localhost:8080/providers/findAll';
                
            }
            else if(section.id=="bebidas"){
                
                // var url = 'http://localhost:8080/bebidas/findAll';
                var url = 'http://localhost:8080/bebidas/findAll';
            }
            const table=section.querySelector("table")
            await obtenerDatos(funciones[section.id],url,table)
        
        }       
        
        
    }

}

