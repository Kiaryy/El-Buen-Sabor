import { lastPlatoId } from "../mostrar/all-platos.mjs";




let isAdding = false; // Controla si ya hay una fila de inputs abierta
const sections_personal = document.getElementById('personal');
const table = sections_personal.querySelector("table");
// Función para agregar una nueva fila con inputs al principio de la tabla

const agregar = document.querySelectorAll('.add-item')


export const add_personal = agregar[1].addEventListener('click', function () {
    if (isAdding) {
        alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
        return;
    }

    let newRow = document.createElement('tr');
    isAdding = true;
    newRow.innerHTML = `

        <td><input type="text" class="input-styles" placeholder="Nombre"></td>
        <td><input type="text" class="input-styles" placeholder="Cargo"></td>
        <td><input type="text" class="input-styles" placeholder="Horario"></td>
        <td><input type="number" class="input-styles" placeholder="$Hora"></td>
        <td><input type="number" class="input-styles" placeholder="Ausencias"></td>
        <td><input type="text"   class="input-styles" placeholder="Telefono"></td>
        <select id="estado">
                <option>ESTADO</option>
                <option>ACTIVO</option>
                <option>INACTIVO</option>
                <option>VACACIONES</option> 
            </select>
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
        estado=document.getElementById('estado').value
        table.insertBefore(newRow, table.rows[last_table]);
        const new_personal = {
            name: values[0],
            charge: values[1],
            shift: values[2],
            hourlySalary: values[3],
            absences: values[4],
            phoneNumber: values[5],
            state: estado,

        };
        const url = 'https://bsapi-latest.onrender.com/employees/findAll';
        // Send the byte array to the API
        sendDataToApi(new_personal, url);

        isAdding = false; // Permitimos agregar una nueva fila

    });

});


