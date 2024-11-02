import { lastPlatoId } from "../mostrar/all-platos.mjs";
import { sendDataToApi } from "./agregar-a-api.mjs";

let isAdding = false; // Controla si ya hay una fila de inputs abierta
const sections_admin = document.getElementById('platos');
const table = sections_admin.querySelector("table");
const agregar = document.querySelectorAll('.add-item')


// Función para agregar una nueva fila con inputs al principio de la tabla

export const add_platos = agregar[0].addEventListener('click', function () {
    if (isAdding) {
        alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
        return;
    }
    // imagen.classList.remove('hide')
    toggleColumns()
    // description.classList.remove('hide')
    let newRow = document.createElement('tr');
    isAdding = true;
    newRow.innerHTML = `
        <td>${(lastPlatoId + 1)}</td>
        <td><input type="text" class="input-styles" placeholder="Nombre"></td>
        <select id="tipo">
                <option>Categoria</option>
                <option>EMPANADA</option>
    
                <option>PIZZA</option>
                <option>POSTRE</option>
                <option>ENSALADA</option>
                <option>HAMBURGUESA</option>
                <option>ACOMPAÑANMIENTO</option>   
            </select>
        <td class="input-styles">N/A</td>
        <td><input type="number" class="input-styles" placeholder="Precio Venta"></td>
        <td class="input-styles">N/A</td>
        <td class="input-styles">N/A</td>
        <td><input type="number" class="input-styles" placeholder="Stock"></td>
        <td><input type="file" id="imageInput" accept="image/*"></td>
        <td><input type="text"   class="input-styles" placeholder="Description"></td>
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

        toggleColumns()

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
        // imagen.classList.add('hide')
        toggleColumns()
        // description.classList.add('hide')

        table.insertBefore(newRow, table.rows[last_table]);
        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                tipo=document.getElementById('tipo').value

                // Convert the ArrayBuffer to a byte array
                const byteArray = new Uint8Array(event.target.result);
                const new_plate = {
                    platoId: (lastPlatoId + 1),
                    name: values[0],
                    description: values[1],
                    type: tipo,
                    price: values[4],
                    stock: values[7],
                    avaliable: true,
                    imageData: Array.from(byteArray) // Convert Uint8Array to regular array for JSON serialization
                };

                const url = 'https://bsapi-latest.onrender.com/platos/add';
                // Send the byte array to the API
                sendDataToApi(new_plate, url);

            };
            reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
        }
        isAdding = false; // Permitimos agregar una nueva fila
        // location.reload()
    });

});

function toggleColumns() {
    // Selecciona las columnas por clase o ID
    const columnas = document.querySelectorAll("#imagenes, #description, #categoria");

    // Alterna la visibilidad de cada columna
    columnas.forEach(columna => {
        if (columna.style.display === "none" || columna.style.display === "") {
            columna.style.display = "table-cell"; // Muestra la columna
        } else {
            columna.style.display = "none"; // Oculta la columna
        }
    });

}

