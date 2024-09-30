const section_hamburguesa=document.querySelector('#section-hamburguesa')
const section_pizza=document.querySelector('#section-pizza')
const section_empanada=document.querySelector('#section-empanada')
const section_ensalada=document.querySelector('#section-ensalada')
const section_acompañamiento=document.querySelector('section-acompañamiento')
const section_postre=document.querySelector('#section-postre')

// let hamburguesaDict = {};
// let pizzaDict = {};
// let empanadaDict = {};
// let ensaladaDict = {};
// let acompañamientoDict = {};
// let postreDict = {};



// Recuperar datos del localStorage
const menuData = JSON.parse(localStorage.getItem('menuData'));

// Referencia al contenedor donde se mostrarán los platos

menuData.forEach(plato => {
    const platoDiv = document.createElement('div');
        platoDiv.classList.add('card-food');
        platoDiv.innerHTML = 
        `
       <div class="card-food">
            <a href="#" class="food">
            </a>
                <img alt="imagen comida" src="${plato.img}">
                <h3>${plato.name}</h3>
        </div>
        `;
        if (plato.type=="HAMBURGUESA") {
            
            section_hamburguesa.appendChild(platoDiv);
        }
        else if(plato.type=="PIZZA"){
            section_pizza.appendChild(platoDiv);
        }
        else if(plato.type=="EMPANADA"){
            section_empanada.appendChild(platoDiv);
        }
        else if(plato.type=="ENSALADA"){
            section_ensalada.appendChild(platoDiv);
        }
        else if(plato.type=="POSTRE"){
            section_postre.appendChild(platoDiv);
        }
        else if(plato.type=="ACOMPAÑANMIENTO"){
            section_acompañamiento.appendChild(platoDiv);
        }
    });
    
    
            // const url = 'http://localhost:8080/platos/findAll';
            // // Realizar la solicitud GET
            // fetch(url)
            // .then(response => {
            //     // Verificar si la respuesta fue exitosa
            //     if (!response.ok) {
            //       throw new Error('Error en la solicitud: ' + response.status);
            //     }
            //     // Convertir la respuesta a JSON
            //     return response.json();
            //   })
            // .then(data => {
            //     // Trabajar con los datos recibidos
            //     data.forEach(item => {
            //         if (item.type=="HAMBURGUESA") {
            //             hamburguesaDict[item.platoID]=item
            //         }
            //         else if(item.type=="PIZZA"){
            //             pizzaDict[item.platoID]=item
            //         }
            //         else if(item.type=="EMPANADA"){
            //             empanadaDict[item.platoID]=item
            //         }
            //         else if(item.type=="ENSALADA"){
            //             ensaladaDict[item.platoID]=item
            //         }
            //         else if(item.type=="ACOMPAÑANMIENTO"){
            //             acompañamientoDict[item.platoID]=item
            //         }
            //         else if(item.type=="POSTRE"){
            //             postreDict[item.platoID]=item
            //         }
                 
            //     })
            //   })
            // .catch(error => {
            //     // Manejar errores
            //     console.error('Hubo un problema con la solicitud:', error);
            // });
        
