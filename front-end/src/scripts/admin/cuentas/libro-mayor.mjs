function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

document.getElementById('libro-mayor').addEventListener('change', function() {
    const cuentaSeleccionada = this.value;
    const filas = document.querySelectorAll('#tabla-asientos tr');
    filas.forEach(fila => {
        const cuenta1 = fila.cells[2].innerText;
        const cuenta2 = fila.cells[5].innerText;

        if (cuentaSeleccionada === "" || cuenta1 === cuentaSeleccionada || cuenta2 === cuentaSeleccionada) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    });
});
let fechaDesde = Date()
let fechaHasta = Date()
document.getElementById('fecha-desde').addEventListener('change', function(){
    fechaDesde = this.value;
    console.log(fechaDesde);
    
})
document.getElementById('fecha-hasta').addEventListener('change', function(){
    fechaHasta = this.value;
    console.log(fechaHasta);
    
})

document.getElementById('boton-filtrar').addEventListener('click', function(){
    const filas = document.querySelectorAll('#tabla-asientos tr');
    if(!isEmpty(fechaDesde) && !isEmpty(fechaHasta)){
    filas.forEach(fila => {
        const fechaAsiento = fila.cells[1].innerText;
        
        if (fechaHasta >= fechaAsiento && fechaDesde <=fechaAsiento) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    })
    }else if(!isEmpty(fechaDesde) && isEmpty(fechaHasta)) {
        filas.forEach(fila => {
            const fechaAsiento = fila.cells[1].innerText;
            
            if (fechaDesde <= fechaAsiento) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        })
    } else {
        filas.forEach(fila => {
            fila.style.display = '';            
        })
    } 
})