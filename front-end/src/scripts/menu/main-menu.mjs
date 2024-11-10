import { show_plates } from "./show-plates/show-plates.mjs";
// Selección de las secciones donde se mostrarán los productos
const section_hamburguesa = document.querySelector('#section-hamburguesa');
const section_pizza = document.querySelector('#section-pizza');
const section_empanada = document.querySelector('#section-empanada');
const section_ensalada = document.querySelector('#section-ensalada');
const section_acompañamiento = document.querySelector('#section-acompañamiento');
const section_postre = document.querySelector('#section-postre');
const button_profile=document.querySelector('#profile')
const button_cerrar_sesion=document.querySelector('#cerrar_sesion')




// Al cargar la página
window.onload = async function () {
    
    if (localStorage.getItem("Users") !== null) {
        console.log("La base 'Users' existe en localStorage.");
        let users = JSON.parse(localStorage.getItem('Users')) || [];
        var index = users.findIndex(u => u.state == true);
        if (index!=-1) {
            button_profile.innerHTML = 'Perfil';
            
            button_profile.addEventListener("click", function(event) {
                event.preventDefault();
                const menu = document.getElementById("menu-hamburguesa");
                menu.classList.toggle("menu-hidden");
              });
        }
    } else {
        button_profile.innerHTML = 'Registro';
        console.log("La base 'Users' no existe en localStorage.");
    }
   
    
    const sectionMap = {
        HAMBURGUESA: section_hamburguesa,
        PIZZA: section_pizza,
        EMPANADA: section_empanada,
        ENSALADA: section_ensalada,
        ACOMPAÑANMIENTO: section_acompañamiento,
        POSTRE: section_postre
    };

        console.log("Cargando productos...");
        // Mostrar la animación de carga
        loader.style.display = 'block';

        // URL de la API para obtener los platos
        // if (!localStorage.getItem('Platos')) {
        //   Realizar la solicitud GET a la API
    
        
        try {
            await show_plates(sectionMap);
        } catch (error) {
            console.error("Error cargando los platos:", error);
        } 
       
};
button_cerrar_sesion.addEventListener('click',()=>{
    let users = JSON.parse(localStorage.getItem('Users')) || [];
    var index = users.findIndex(u => u.state == true);
    users[index].state==false
    localStorage.setItem('Users', JSON.stringify([users[index]]));
    alert("Se cerro la sesion correctamente")
    location.reload()

})