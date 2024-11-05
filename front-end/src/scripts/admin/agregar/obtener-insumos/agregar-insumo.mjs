//FUNCIO PARA OBTENER TODOS LOS INSUMOS
export const agregarInsumos=()=>{
    const productSelect = document.querySelectorAll('.producto');
    
    
    tabla_insumos.forEach(insumo => {
        
        const option = document.createElement('option');

        option.value =insumo.name
        option.textContent=insumo.name
        productSelect.forEach(select=>{

            select.appendChild(option.cloneNode(true))
        })
    }); 
}