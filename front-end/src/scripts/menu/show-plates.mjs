const section_hamburguesa=document.querySelector('#section-hamburguesa')
const section_pizza=document.querySelector('#section-pizza')
const section_empanada=document.querySelector('#section-empanada')
const section_ensalada=document.querySelector('#section-ensalada')
const section_acompañamiento=document.querySelector('section-acompañamiento')
const section_postre=document.querySelector('#section-postre')


window.onload =async function () {
    const url = 'https://demoapi-latest.onrender.com/platos/findAll';
// Realizar la solicitud GET
fetch(url)
.then(response => {
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
    throw new Error('Error en la solicitud: ' + response.status);
    }
    // Convertir la respuesta a JSON
    return response.json();
})
.then(data => {
    // Mapeamos las secciones a los tipos de comida
    const sectionMap = {
        HAMBURGUESA: section_hamburguesa,
        PIZZA: section_pizza,
        EMPANADA: section_empanada,
        ENSALADA: section_ensalada,
        ACOMPAÑANMIENTO: section_acompañamiento,
        POSTRE: section_postre
    };

    // Trabajar con los datos recibidos
    data.forEach(item => {
        // Si existe una sección para el tipo de comida
        if (sectionMap[item.type]) {
            sectionMap[item.type].innerHTML += `
                <div class="card-food">
                    <a href="#" class="food"></a>
                    <img alt="imagen comida" src="${item.img}">
                    <h3>${item.name}</h3>
                </div>
            `;
        }
    });
})
    
    // Object.values(hamburguesaDict).forEach(hamburguesa => {
    //     console.log(hamburguesa.name);
    //  
    // })

.catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la solicitud:', error);
});



}
function addPlate(section){

}