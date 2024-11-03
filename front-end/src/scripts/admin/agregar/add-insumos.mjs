import { lastInsumoId } from "../mostrar/all-insumos.mjs";

import { proveedores_select } from "../proveedores/proveedores-select.mjs";



let isAdding = false; // Controla si ya hay una fila de inputs abierta
const sections_insumos = document.getElementById('insumos');
const table = sections_insumos.querySelector("table");

const agregar = document.querySelectorAll('.add-item')
// Función para agregar una nueva fila con inputs al principio de la tabla

export const add_insumos = agregar[2].addEventListener('click', function () {
    if (isAdding) {
        alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
        return;
    }

    let newRow = document.createElement('tr');
    isAdding = true;
    newRow.innerHTML = `
        <td>${(lastInsumoId + 1)}</td>
        <td><input type="text" class="input-styles" placeholder="Nombre"></td>
        <td><input type="text" class="input-styles" placeholder="Denominacion"></td>
          <select id="categoria_select">
                <option>Categoria</option>
                <option>Vegetal</option>
    
                <option>Carne</option>
                <option>Lácteos</option>
                <option>Frutas</option>
                <option>Hongo</option>
                <option>Legumbres</option>
                <option>Salsa</option>
                <option>Azúcar</option>
                <option>Especias</option>
                <option>Salsa de caramelo</option>
                <option>Cereales</option>
                <option>Aderezos</option>     
            </select>
        <td><input type="text" class="input-styles" placeholder="Proveedor"></td>
        <td><input type="number" class="input-styles" placeholder="Precio Unidad"></td>
        <td><input type="number" class="input-styles" placeholder="Precio Costo"></td>
        <td><input type="text"   class="input-styles" placeholder="Stock"></td>
        <td><input type="text"   class="input-styles" placeholder="Existencias"></td>
        <td><input type="number" class="input-styles" placeholder="Ultima Compra"></td>
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
        categories=document.getElementById('categoria').value
        table.insertBefore(newRow, table.rows[last_table]);
        const new_insumo = {
            articleId:(lastInsumoId + 1),
            name:values[0],
            denominacion:values[1],
            category:categories,
            provider:values[2],
            priceUnit:values[3],
            precioCompra:values[4],
            stockActual:values[5],
            existencies:values[6],
            lastPurchased:values[7]
        };
        const url = 'http://localhost:8080/article/add';
        // const url = 'https://bsapi-latest.onrender.com/article/add';
        // Send the byte array to the API
        sendDataToApi(new_insumo, url);

        isAdding = false; // Permitimos agregar una nueva fila

    });
    const selectCategoria = document.getElementById('categoria_select');

    
    selectCategoria.addEventListener('change', function () {
        const celdas = newRow.querySelectorAll('td');
        proveedores_select(selectCategoria,celdas,'add')
    })

});


