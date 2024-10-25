export const save_plates =(plates_new)=>{
    let plates = JSON.parse(localStorage.getItem('Platos')) || [];
    for (let plate of plates_new) {
            plates.push(plate)
        }
        localStorage.setItem('Platos',JSON.stringify(plates));
        
    }
