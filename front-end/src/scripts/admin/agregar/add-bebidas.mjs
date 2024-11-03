import { lastBebidaId } from "../mostrar/all-bebidas.mjs";





let isAdding = false; // Controla si ya hay una fila de inputs abierta
const sections_insumos = document.getElementById('bebidas');
const table = sections_insumos.querySelector("table");

const agregar = document.querySelectorAll('.add-item')
// Función para agregar una nueva fila con inputs al principio de la tabla

export const add_bebidas = agregar[5].addEventListener('click', function () {
    if (isAdding) {
        alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
        return;
    }

    let newRow = document.createElement('tr');
    isAdding = true;
    newRow.innerHTML = `
        <td>${(lastBebidaId + 1)}</td>
        <td><input type="text" class="input-styles" placeholder="Nombre"></td>
        <td><input type="text" class="input-styles" placeholder="Description"></td>
        <td><input type="number" class="input-styles" placeholder="Precio"></td>
        <td><input type="number" class="input-styles" placeholder="Stock"></td>
        <td>
            <button class="save-item">Guardar</button>
            <button class="cancel-item">Cancelar</button>
        </td>
    `;
    let last_table = table[table.length - 1]
    // Insertamos la nueva fila al principio, justo después del encabezado
    table.insertBefore(newRow, table.rows[1]);
    // Evento "Cancelar" para eliminar la fila de inputs
    newRow.querySelector('.cancel-item').addEventListener('click', function () {
        table.removeChild(newRow);
        isAdding = false;
    });
    // Evento "Guardar" para convertir la fila de inputs en una fila de datos
    newRow.querySelector('.save-item').addEventListener('click', function () {
        const inputs = newRow.querySelectorAll('input');
        const values = Array.from(inputs).map(input => input.value);
        // Verificar si todos los campos están completos
        if (values.some(value => value.trim() === "")) {
            alert("Por favor, complete todos los campos antes de guardar.");
            return;
        }
        table.insertBefore(newRow, table.rows[last_table]);
        const new_insumo = {
            id:(lastBebidaId + 1),
            nombre:values[0],
            descripcion:values[1],
            stock:values[2],
        };
        const url = 'http://localhost:8080/bebidas/add';
        // const url = 'https://bsapi-latest.onrender.com/bebidas/add';
        // Send the byte array to the API
        sendDataToApi(new_insumo, url);

        isAdding = false; // Permitimos agregar una nueva fila

    });

});


