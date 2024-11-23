import { cargos } from "../agregar/cargos/cargos.mjs";

export const obtener_horarios = (newRow) => {

    const cargoEmpleado = document.getElementById('charge');

    const celdas = newRow.querySelectorAll('td');
    cargoEmpleado.addEventListener('change', function () {
        cargos(cargoEmpleado, celdas)
    })

}