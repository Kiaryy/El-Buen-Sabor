import { lastIds } from "../mostrar/mostrar.mjs";
import { sendDataToApi } from "./agregar-a-api.mjs";
import { categoriaCompletarProveedor,proveedores_select ,obtener_proveedor } from "./obtener-provedores/obtener_proveedores.mjs";

import { api_editar } from "../editar/api-editar/api-editar.mjs";
import { obtener_horarios } from "../horarios/obtener-horario.mjs";
//VARIABLE QUE CONTIENE LOS DATOS DE LAS SECCIONES
const sections = {
    bebidas: {
        lastId: lastIds.bebidas,
        tableId: 'bebidas',
        addBtnIndex: 4,
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
        url: 'https://proactive-intuition-production-15d4.up.railway.app/bebidas/add'
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
                <option>CATEGORIA</>
                </select>
            </td>
            <td id="proveedor" class="input-styles"> Proveedor</td>
            <td><input type="number" class="input-styles" placeholder="Precio Unidad"></td>
            <td><input type="number" class="input-styles" placeholder="Precio Costo"></td>
            <td><input type="number" class="input-styles" placeholder="Stock"></td>
            <td><input type="number" class="input-styles" placeholder="Existencias"></td>
            <td><input type="date" id="ultima-compra" class="input-styles" placeholder="Ultima Compra"></td>
        
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
      
        url: 'https://proactive-intuition-production-15d4.up.railway.app/article/add'
    },
    personal: {
        lastId: lastIds.personal,
        tableId: 'personal',
        addBtnIndex: 1,
        createRow: () => `
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
            <td>
                    <select id="charge">
                <option>Cargo</option>
                <option>CAJERO</option>
                <option>MANAGER</option>
                <option>DELIVERY</option>
                <option>CHEF</option>
                </select>
           </td>
            <td><input type="text" class="input-styles" placeholder="Horario"></td>
            <td><input type="number" class="input-styles" placeholder="$Hora"></td>
            <td><input type="number" class="input-styles" placeholder="Ausencias"></td>
            <td><input type="text" class="input-styles" placeholder="Telefono"></td>
            <td>
                <select id="estado">
                    <option>ESTADO</option>
                    <option>ACTIVO</option>
                    <option>INACTIVO</option>
                    <option>VACACION</option> 
                </select>
            </td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'https://proactive-intuition-production-15d4.up.railway.app/employees/add'
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
          
            <td><input type="number" class="input-styles" placeholder="Precio Venta"></td>
            <td><input type="number" class="input-styles" placeholder="Stock"></td>
            <td><input type="file" id="imageInput" accept="image/*"></td>
            <td><input type="text" class="input-styles" placeholder="Description"></td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'https://proactive-intuition-production-15d4.up.railway.app/platos/add'
    },
    proveedores: {
        lastId: lastIds.proveedores,
        tableId: 'proveedores',
        addBtnIndex: 3,
        createRow: () => `
            <td>${(lastIds.proveedores + 1)}</td>
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
        <tr>
          <td id="cell_poduct">
          <button type="button" onclick="addProductSelect()">Agregar otro producto</button>
                
            <select class="producto">
                <option>Producto</option>
    
            </select>

            </td>
        </tr>
          
      
            <td><input type="number" class="input-styles" placeholder="Pecio"></td>
            <td><input type="number" class="input-styles" placeholder="Numero telefono"></td>
            <td><input type="text" id="articleInput" class="input-styles" placeholder="Arituculo ID"></td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        url: 'https://proactive-intuition-production-15d4.up.railway.app/providers/add'
    },
    // promociones: {
    //     lastId: lastIds.promociones,
    //     tableId: 'promociones',
    //     addBtnIndex: 4,
    //     createRow: () =>
    //         `<td>${(lastIds.promociones + 1)}</td>
    //         <td><input type="text" class="input-styles" placeholder="Nombre"></td>
    //         <tr id="plato-row">
    //             <td id="plato-cell">
    //              <select class="plato-select">
    //                  <option>Platos</option>
    //              </select>
    //              <button type="button" onclick="addPlatoInput()">Agregar otro plato</button>
    //             </td>
    //         </tr>
    //         <tr id="bebida-row">
    //             <td id="bebida-cell">
    //               <select class="bebida-select">
    //                  <option>Bebidas</option>
    //                  </select>
    //                  <button type="button" onclick="addBebidaInput()">Agregar otra bebida</button>
    //             </td>
    //         </tr>
    //         <td><input type="number" class="input-styles" placeholder="Precio"></td>
    //         <td>
    //             <button class="save-item">Guardar</button>
    //             <button class="cancel-item">Cancelar</button>
    //         </td>
    //         `,
    //     populateSelects: (platos, bebidas) => {


    //         const platoSelects = document.querySelectorAll('.plato-select');

    //         const bebidaSelects = document.querySelectorAll('.bebida-select');

    //         // Limpiar las opciones existentes
    //         platoSelects.forEach(select => {
    //             console.log(select);
                
    //             select.innerHTML = '<option>Platos</option>'; // Reiniciar opciones
    //             platos.forEach(plato => {
    //                 const option = document.createElement('option');
    //                 option.value = plato.id; // Asumiendo que cada plato tiene un ID
    //                 option.textContent = plato.name; // Asumiendo que cada plato tiene un nombre
    //                 select.appendChild(option);
    //             });
    //         });

    //         bebidaSelects.forEach(select => {
    //             select.innerHTML = '<option>Bebidas</option>'; // Reiniciar opciones
    //             bebidas.forEach(bebida => {
    //                 const option = document.createElement('option');
    //                 option.value = bebida.id; // Asumiendo que cada bebida tiene un ID
    //                 option.textContent = bebida.nombre; // Asumiendo que cada bebida tiene un nombre
    //                 select.appendChild(option);
    //             });
    //         });
    //     }
    // }
};

let isAdding = false; // Controla si ya hay una fila de inputs abierta
//FUNCION PARA EDITAR QUE RECIBE LA SECCION
export const addItem = (section) => {
    //de la seccion obtenemos la tableId, los datos que se suben y la url
    const { tableId, createRow, url } = sections[section];
    const sections_insumos = document.getElementById(tableId);
    const table = sections_insumos.querySelector("table");
    //agarramos todos lo elmentos paqr editar
    const agregar = document.querySelectorAll('.add-item');
    
    //valida si se le hace click a la seccion y la posicion de la seccion
    agregar[sections[section].addBtnIndex].addEventListener('click', function () {
        //si ya hay una fila tiraq esta alerta
        if (isAdding) {
            alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
            return;
        }
        //creamos el elemnto de la fila y la colocams en la posicion 1 (en la cero esta el titulo de los valores)
        let newRow = document.createElement('tr');
        isAdding = true;
        newRow.innerHTML = createRow();
        
        table.insertBefore(newRow, table.rows[1]);
        toggleColumns()
        if (section == "insumos") {
            

            //llama a la funcion para obtener el proveedor
            obtener_proveedor(newRow)
            //llama a la funcion para que aparezcan los proveedores
            categoriaCompletarProveedor()

            //FUNCION PARA OPTENER LA FEHCA

        } else if (section == "personal") { 
            //llama a la funcion para obtener los horarios
            obtener_horarios(newRow)
        } else if (section == "promociones") {
            let platos =platos_todos
            let bebidas =bebidas_todas

            // Llamar a la función para llenar los selects
         
        }else if(section=="proveedores"){
            agregarInsumos()
        }
        // Evento "Cancelar" para eliminar la fila de inputs
        newRow.querySelector('.cancel-item').addEventListener('click', function () {
            table.removeChild(newRow);
            isAdding = false;
            toggleColumns()
        });

        // Evento "Guardar" para convertir la fila de inputs en una fila de datos
        newRow.querySelector('.save-item').addEventListener('click', function () {
            saveData(section,newRow,url,null)

        });
    });

};
export const saveData = async (section, newRow,url,urlEditar) => {
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
        console.log(newRow);
        
     
        additionalData.proveedor=newRow.querySelector('#proveedor').textContent;
                
        additionalData.category = newRow.querySelector('#categoria_select').value;
        additionalData.lastPurchased=newRow.querySelector('#ultima-compra').value
    } else if (section === 'personal') {
        additionalData.state = newRow.querySelector('#estado').value;
        additionalData.charge = newRow.querySelector('#charge').value;
    } else if (section === 'platos') {
        if (urlEditar==null) {
            const fileInput = document.getElementById('imageInput');
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const byteArray = new Uint8Array(event.target.result);
                    enviarData(byteArray, section, values, additionalData, url,urlEditar, newRow);
                };
                reader.readAsArrayBuffer(file);
            } else {
                enviarData(null, section, values, additionalData, url,urlEditar, newRow);
            }
        }else{
            enviarData(null, section, values, additionalData, url,urlEditar, newRow);
        }
      
        return;
    }
    enviarData(null, section, values, additionalData, url,urlEditar, newRow);
}
const enviarData=async (byteArray,section,values,additionalData,url,urlEditar,newRow)=>{
    let newItem; // Definir la variable aquí para usarla más adelante
    // Creamos el objeto 'newItem' basado en la sección
    if (section === 'bebidas') {
        newItem = {
            id: sections[section].lastId + 1, // Asignar el último ID más uno
            nombre: values[0], // Nombre del input
            descripcion: values[1], // Descripción del input
            precio: values[2],
            stock: values[3] // Stock (cuarto input)
        };
    } else if (section === 'insumos') {
        newItem = {
            articleId: sections[section].lastId + 1, // Asignar el último articleId más uno
            name: values[0], // Nombre del input
            denominacion: values[1], // Denominación del input
            category: additionalData.category, // Categoría de los datos adicionales
            provider:Number(additionalData.proveedor), // Proveedor (quinto input)
            priceUnit: Number(values[2]), // Precio Unidad (sexto input)
            precioCompra: Number(values[3]), // Precio Costo (séptimo input)
            stockActual: Number(values[4]), // Stock (octavo input)
            existencies: Number(values[5]), // Existencias (noveno input)
            lastPurchased: additionalData.lastPurchased// Última compra (de datos adicionales)
        };
    } else if (section === 'personal') {

        newItem = {
            name: values[0], // Nombre del input
            charge: additionalData.charge, // Cargo del input
            shift: values[1], // Horario del input
            hourlySalary: Number(values[1]), // $Hora (cuarto input)
            absences: Number(values[2]), // Ausencias (quinto input)
            phoneNumber: Number(values[3]), // Teléfono (sexto input)
            state: additionalData.state // Estado de los datos adicionales
        };
    } else if (section === 'platos') {
        newItem = { // Asignar el último platoId más uno
            name: values[0], // Nombre del input
            description: values[4], // Descripción del input
            type: newRow.querySelector('#tipo').value, // Tipo del plato (select)
            price: Number(values[1]), // Precio Venta (cuarto input)
            available: true, // Avaliable (puedes ajustar esto según sea necesario)
            stock: Number(values[2]), // Stock (octavo input)
            imageData: Array.from(byteArray),
            articles: [
                {
                    articleId: 1,
                    quantity: 3
                },
                {
                    articleId: 2,
                    quantity: 2
                }
            ],// Datos de la imagen (si existe)
        };
    } else if (section == 'proveedores') {
        const input = document.getElementById("articleInput").value;
        const arti = input.split(",").map(value => value.trim());
        const articles = arti.map(value => `${value}`);
        
        const container_product=document.getElementById("cell_poduct")
        console.log(container_product);
        
        const product=container_product.querySelectorAll("select")
        const productValues = Array.from(product).map(input => input.value);
        console.log(productValues);
      
        
        // Dividir el valor ingresado por comas
        
        // Crear el formato deseado
    
        newItem = {
            name: values[0],
            product: productValues,
            shippingCost:Number(values[values.length-3]),
            phoneNumber: Number(values[values.length-2]),
            articles:articles,
        }
    }

    console.log(newItem); // Para verificar el objeto creado antes de enviarlo

    // Envío de datos a la API

    if (url==null) {
        if(await api_editar(urlEditar,newItem)){

            location.reload(); // 
        }
    
    }else{

        sendDataToApi(newItem, url)
    }



    isAdding = false; // Permitimos agregar una nueva fila
};

   
// Inicializar los listeners
for (const section in sections) {
    addItem(section);
}
//FUNCION PARA MOSTRAR LAS OTRAS COLUMNAS
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





export function addProductSelect() {
    const containerProduct=document.getElementById('cell_poduct')
  
    // Crear un nuevo input para producto
    const newInput = document.createElement("select");
    newInput.classList.add("producto")
    
    // Crear un botón para eliminar este input
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Eliminar";
    deleteButton.onclick = function () {
        containerProduct.removeChild(deleteButton);
        containerProduct.removeChild(newInput);
    };

    // // Añadir el input y el botón de eliminar al contenedor
    containerProduct.appendChild(newInput);
    containerProduct.appendChild(deleteButton);
    agregarInsumos()

    // // Añadir el contenedor en la celda antes del botón "Agregar otro producto"
    // productCell.insertBefore(inputContainer, productCell.lastElementChild);
    // // sections.promociones.populateSelects(platos, bebidas);
}
window.addProductSelect = addProductSelect;

// Función para obtener los valores de los inputs de producto como lista y pasarlos
// export function submitProducts() {
//     const inputs = document.querySelectorAll('#product-cell input[name="producto"]');
//     const productList = Array.from(inputs).map(input => input.value);

//     console.log("Lista de productos:", productList);
//     // Aquí puedes usar productList según lo necesites, como enviarlo al servidor o pasarlo a otra función
// }
// Funciones para agregar y eliminar selects
// window.addPlatoInput = addPlatoInput;
// window.addBebidaInput = addBebidaInput;



// export function addPlatoInput() {
//     console.log(platos_todos);
    
//     const platos = platos_todos
    

//     const bebidas = bebidas_todas
    
//     const platoCell = document.getElementById('plato-cell');

//     // Crear un contenedor para el nuevo input y el botón de eliminar
//     const inputContainer = document.createElement("div");
//     inputContainer.className = "plato-select-container";


//     // Crear un nuevo input para producto
//     const newInput = document.createElement("select");
//     newInput.option = "Platos";
//     newInput.className = "plato-select"

//     // Crear un botón para eliminar este input
//     const deleteButton = document.createElement("button");
//     deleteButton.type = "button";
//     deleteButton.innerText = "Eliminar";
//     deleteButton.onclick = function () {
//         platoCell.removeChild(inputContainer);
//     };

//     // Añadir el input y el botón de eliminar al contenedor
//     inputContainer.appendChild(newInput);
//     inputContainer.appendChild(deleteButton);

//     // Añadir el contenedor en la celda antes del botón "Agregar otro producto"
//     platoCell.insertBefore(inputContainer, platoCell.lastElementChild);
//     sections.promociones.populateSelects(platos, bebidas);


// }
// export function addBebidaInput() {
//   const platos = platos_todos
    

//     const bebidas = bebidas_todas
//     const bebidaCell = document.getElementById('bebida-cell');

//     // Crear un contenedor para el nuevo input y el botón de eliminar
//     const inputContainer = document.createElement("div");
//     inputContainer.className = "plato-select-container";


//     // Crear un nuevo input para producto
//     const newInput = document.createElement("select");
//     newInput.option = "Bebidas";
//     newInput.className = "bebida-select"

//     // Crear un botón para eliminar este input
//     const deleteButton = document.createElement("button");
//     deleteButton.type = "button";
//     deleteButton.innerText = "Eliminar";
//     deleteButton.onclick = function () {
//         bebidaCell.removeChild(inputContainer);
//     };

//     // Añadir el input y el botón de eliminar al contenedor
//     inputContainer.appendChild(newInput);
//     inputContainer.appendChild(deleteButton);

//     // Añadir el contenedor en la celda antes del botón "Agregar otro producto"
//     bebidaCell.insertBefore(inputContainer, bebidaCell.lastElementChild);
//     sections.promociones.populateSelects(platos, bebidas);

// }

// function removeBebidaInput(button) {
//     const rowToRemove = button.closest('tr');
//     if (rowToRemove) {
//         rowToRemove.parentNode.removeChild(rowToRemove);
//     }
// }
// Ejemplo de uso

