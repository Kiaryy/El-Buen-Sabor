// import { lastBebidaId } from "../mostrar/all-bebidas.mjs";
// import { lastInsumoId } from "../mostrar/all-insumos.mjs";
// import { lastPlatoId } from "../mostrar/all-platos.mjs";
import { lastIds } from "../mostrar/mostrar.mjs";
import { sendDataToApi } from "./agregar-a-api.mjs";
import { proveedores_select } from "../proveedores/proveedores-select.mjs";

const sections = {
    bebidas: {
        lastId: lastIds.bebidas,
        tableId: 'bebidas',
        addBtnIndex: 5,
        createRow: () => `
            <td>${(lastIds.bebidas + 1)}</td>
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
            <td><input type="text" class="input-styles" placeholder="Description"></td>
            <td><input type="number" class="input-styles" placeholder="Precio"></td>
            <td><input type="number" class="input-styles" placeholder="Stock"></td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'http://localhost:8080/bebidas/add'
    },
    insumos: {
        lastId: lastIds.insumos,
        tableId: 'insumos',
        addBtnIndex: 2,
        createRow: () => `
            <td>${(lastIds.insumos + 1)}</td>
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
            <td><input type="text" class="input-styles" placeholder="Denominacion"></td>
            <td>
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
            </td>
            <td><input type="text" class="input-styles" placeholder="Proveedor"></td>
            <td><input type="number" class="input-styles" placeholder="Precio Unidad"></td>
            <td><input type="number" class="input-styles" placeholder="Precio Costo"></td>
            <td><input type="text" class="input-styles" placeholder="Stock"></td>
            <td><input type="text" class="input-styles" placeholder="Existencias"></td>
            <td id="fecha-actual-insumo"></td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'http://localhost:8080/article/add'
    },
    personal: {
        lastId: lastIds.personal,
        tableId: 'personal',
        addBtnIndex: 1,
        createRow: () => `
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
            <td><input type="text" class="input-styles" placeholder="Cargo"></td>
            <td><input type="text" class="input-styles" placeholder="Horario"></td>
            <td><input type="number" class="input-styles" placeholder="$Hora"></td>
            <td><input type="number" class="input-styles" placeholder="Ausencias"></td>
            <td><input type="text" class="input-styles" placeholder="Telefono"></td>
            <td>
                <select id="estado">
                    <option>ESTADO</option>
                    <option>ACTIVO</option>
                    <option>INACTIVO</option>
                    <option>VACACIONES</option> 
                </select>
            </td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'http://localhost:8080/employees/add'
    },
    platos: {
        lastId: lastIds.platos,
        tableId: 'platos',
        addBtnIndex: 0,
        createRow: () => `
            <td>${(lastIds.platos + 1)}</td>
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
            <td>
                <select id="tipo">
                    <option>Categoria</option>
                    <option>EMPANADA</option>
                    <option>PIZZA</option>
                    <option>POSTRE</option>
                    <option>ENSALADA</option>
                    <option>HAMBURGUESA</option>
                    <option>ACOMPAÑANMIENTO</option>   
                </select>
            </td>
            <td class="input-styles">N/A</td>
            <td><input type="number" class="input-styles" placeholder="Precio Venta"></td>
            <td class="input-styles">N/A</td>
            <td class="input-styles">N/A</td>
            <td><input type="number" class="input-styles" placeholder="Stock"></td>
            <td><input type="file" id="imageInput" accept="image/*"></td>
            <td><input type="text" class="input-styles" placeholder="Description"></td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'http://localhost:8080/platos/add'
    }
};

let isAdding = false; // Controla si ya hay una fila de inputs abierta

export const addItem = (section) => {

    const { tableId, createRow, url } = sections[section];
    const sections_insumos = document.getElementById(tableId);
    const table = sections_insumos.querySelector("table");
    const agregar = document.querySelectorAll('.add-item');

    agregar[sections[section].addBtnIndex].addEventListener('click', function () {
        if (isAdding) {
            alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
            return;
        }

        let newRow = document.createElement('tr');
        isAdding = true;
        newRow.innerHTML = createRow();
        let last_table = table[table.length - 1];
        table.insertBefore(newRow, table.rows[1]);
        toggleColumns()
        //FUNCION PARA AUTOCOMPLETAR EL PROVEEDOR
        if (section == "insumos") {

            obtener_proveedor(newRow)
            //FUNCION PARA OPTENER LA FEHCA
            obtener_fecha()
        }
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
            toggleColumns()

            const additionalData = {};
            if (section === 'insumos') {
                console.log("ds");

                additionalData.category = newRow.querySelector('#categoria_select').value;
            } else if (section === 'personal') {
                additionalData.state = newRow.querySelector('#estado').value;
            } else if (section === 'platos') {
                const fileInput = document.getElementById('imageInput');
                const file = fileInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const byteArray = new Uint8Array(event.target.result);
                        saveData(byteArray, section, values, additionalData, url);
                    };
                    reader.readAsArrayBuffer(file);
                } else {
                    saveData(null, section, values, additionalData, url);
                }
                return;
            }
            saveData(null, section, values, additionalData, url);

        });
    });

};

const saveData = async(fileData, section, values, additionalData, url) => {
    let newItem; // Definir la variable aquí para usarla más adelante
    // Creamos el objeto 'newItem' basado en la sección
    if (section === 'bebidas') {
        newItem = {
            id: sections[section].lastId + 1, // Asignar el último ID más uno
            nombre: values[0], // Nombre del input
            descripcion: values[1], // Descripción del input
            precio:values[2],
            stock: values[3] // Stock (cuarto input)
        };
    } else if (section === 'insumos') {
        newItem = {
            articleId: sections[section].lastId + 1, // Asignar el último articleId más uno
            name: values[0], // Nombre del input
            denominacion: values[1], // Denominación del input
            category: additionalData.category, // Categoría de los datos adicionales
            provider: values[3], // Proveedor (quinto input)
            priceUnit: values[4], // Precio Unidad (sexto input)
            precioCompra: values[5], // Precio Costo (séptimo input)
            stockActual: values[6], // Stock (octavo input)
            existencies: values[7], // Existencias (noveno input)
            lastPurchased: additionalData.lastPurchased || null // Última compra (de datos adicionales)
        };
    } else if (section === 'personal') {
        newItem = {
            name: values[0], // Nombre del input
            charge: values[1], // Cargo del input
            shift: values[2], // Horario del input
            hourlySalary: values[3], // $Hora (cuarto input)
            absences: values[4], // Ausencias (quinto input)
            phoneNumber: values[5], // Teléfono (sexto input)
            state: additionalData.state // Estado de los datos adicionales
        };
    } else if (section === 'platos') {
        newItem = {
            platoId: sections[section].lastId + 1, // Asignar el último platoId más uno
            name: values[0], // Nombre del input
            description: values[1], // Descripción del input
            type: newRow.querySelector('#tipo').value, // Tipo del plato (select)
            price: values[3], // Precio Venta (cuarto input)
            stock: values[7], // Stock (octavo input)
            available: values[5] || null, // Avaliable (puedes ajustar esto según sea necesario)
            imageData: fileData // Datos de la imagen (si existe)
        };
    }

    console.log(newItem); // Para verificar el objeto creado antes de enviarlo

    // Envío de datos a la API
    sendDataToApi(newItem, url)
    

   
    isAdding = false; // Permitimos agregar una nueva fila
};
// Inicializar los listeners
for (const section in sections) {
    addItem(section);
}
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
const obtener_fecha = () => {

    const fecha = new Date(); // Obtiene la fecha actual
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const dia = String(fecha.getDate()).padStart(2, '0');
    const fechaFormateada = `${año}-${mes}-${dia}`; // Formato YYYY-MM-DD
    console.log(fechaFormateada);

    document.getElementById('fecha-actual-insumo').textContent = fechaFormateada; // Establece el contenido del <td>
}
const obtener_proveedor = (newRow) => {
    const selectCategoria = document.getElementById('categoria_select');
    selectCategoria.addEventListener('change', function () {
        const celdas = newRow.querySelectorAll('td');
        proveedores_select(selectCategoria, celdas)
    })
}