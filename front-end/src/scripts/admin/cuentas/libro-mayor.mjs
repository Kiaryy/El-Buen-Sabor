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