import { show_plates } from "./show-plates/show-plates.mjs";
import { show_plates_local } from "./show-plates/local-plates/show-plate-local.mjs";
// Selección de las secciones donde se mostrarán los productos
const section_hamburguesa = document.querySelector('#section-hamburguesa');
const section_pizza = document.querySelector('#section-pizza');
const section_empanada = document.querySelector('#section-empanada');
const section_ensalada = document.querySelector('#section-ensalada');
const section_acompañamiento = document.querySelector('#section-acompañamiento');
const section_postre = document.querySelector('#section-postre');

const button_cerrar_sesion=document.querySelector('#cerrar_sesion')




// Al cargar la página
window.onload = async function () {
    if (localStorage.getItem("Users") !== null) {
        console.log("La base 'Users' existe en localStorage.");
        let users = JSON.parse(localStorage.getItem('Users')) || [];
        var index = users.findIndex(u => u.state == true);
        console.log(index);
        
        if (index!=-1) {
            button_profile.innerHTML = 'Perfil';
            
            button_profile.addEventListener("click", function(event) {
                event.preventDefault();
                const menu = document.getElementById("menu-hamburguesa");
                menu.classList.toggle("menu-hidden");
              });
        }
    } else {
        console.log("sdad");
        
        button_profile.innerHTML = 'Registro';
        console.log("La base 'Users' no existe en localStorage.");
    }

        
        // cerrar()
        
          
        

    const sectionMap = {
        HAMBURGUESA: section_hamburguesa,
        PIZZA: section_pizza,
        EMPANADA: section_empanada,
        ENSALADA: section_ensalada,
        ACOMPAÑANMIENTO: section_acompañamiento,
        POSTRE: section_postre
    };

        console.log("Cargando productos...");
        
        // URL de la API para obtener los platos
        // if (!localStorage.getItem('Platos')) {
        //   Realizar la solicitud GET a la API
        show_plates(sectionMap)
        //  }else{
        //     show_plates_local(sectionMap)

    // }   
       
};

function cerrar(){
    let usuarios = JSON.parse(localStorage.getItem("Users"));

        // Buscamos el usuario que tiene state: true
        let usuario = usuarios.find(u => u.state === true);
        
    
            // Modificamos las propiedades del usuario que tiene state: true
            usuario.state = false;
            
            // Guardamos el array actualizado en el localStorage
            localStorage.setItem("Users", JSON.stringify(usuarios));
      
 
}