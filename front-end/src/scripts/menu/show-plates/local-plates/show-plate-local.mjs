export const show_plates_local=(sectionMap)=>{
    let platos=JSON.parse(localStorage.getItem('Platos'))||[]
    platos.forEach(plato => {
       
        
        if (sectionMap[plato.type]) {
            sectionMap[plato.type].innerHTML += `
            <div class="card-food" data-name="${plato.name}" data-description="${plato.description}" data-price="${plato.price}">
            <img alt="imagen comida" src="${plato.img}">
            <h5>${plato.name}</h5>
            </div>
            `;
        }
    });
}