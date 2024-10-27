import { platos } from "./mostrar/all-platos.mjs"; 
import { insumos } from "./mostrar/all-insumos.mjs";
import { personal } from "./mostrar/all.personal.mjs";
import { add_platos } from "./agregar/add-platos.mjs";




const section_platos =document.querySelectorAll('.content-section')

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
                var url = 'https://bsapi-latest.onrender.com/platos/findAll';
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

