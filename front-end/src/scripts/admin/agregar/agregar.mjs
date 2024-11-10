import { completarPlatosBebidasSelect } from "./completar-platos-bebidas/completar-plato-bebidas.mjs";
import { lastIds, tabla_nombre_insumos } from "../mostrar/mostrar.mjs";
import { sendDataToApi } from "./agregar-a-api.mjs";
import { categoriaCompletarProveedor, proveedores_select, obtener_proveedor } from "./obtener-provedores/obtener_proveedores.mjs";
import { platos_todos, bebidas_todas } from "../mostrar/mostrar.mjs";
import { api_editar } from "../editar/api-editar/api-editar.mjs";
import { obtener_horarios } from "../horarios/obtener-horario.mjs";
import { agregarInsumos } from "./obtener-insumos/agregar-insumo.mjs";
import { articulosPLatos } from "./mostrar-articulos-para-platos/articulos-para-platos.mjs";
//VARIABLE QUE CONTIENE LOS DATOS DE LAS SECCIONES

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
        // url: 'http://localhost:8080/bebidas/add'
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

        url: 'http://localhost:8080/article/add'
        // url: 'http://localhost:8080/article/add'
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
        url: 'http://localhost:8080/employees/add'
        // url: 'http://localhost:8080/employees/add'
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
            <tr id=articulo-row>
                <td id=articulo-cell>
                <button type="button" onclick="addArticulo()">Agregar otro articulo</button>
                    <select class="articulo-select">
                        <option>Articulos</option>
                
                    </select>
                </td>
            </tr>  
          
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
        `,
        
        // url: 'http://localhost:8080/platos/add'
        url: 'http://localhost:8080/platos/add'
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
        // url: 'http://localhost:8080/providers/add'
        url: 'http://localhost:8080/providers/add'
    },
    promociones: {
        lastId: lastIds.promociones,
        tableId: 'promociones',
        addBtnIndex: 4,
        createRow: () =>
            `<td>${(lastIds.promociones + 1)}</td>
            <td><input type="text" class="input-styles" placeholder="Nombre"></td>
            <tr id="plato-row">
                <td id="plato-cell">
                 <select class="plato-select">
                     <option>Platos</option>
                 </select>
                 <button type="button" onclick="addPlatoInput()">Agregar otro plato</button>
                </td>
            </tr>
            <tr id="bebida-row">
                <td id="bebida-cell">
                  <select class="bebida-select">
                     <option>Bebidas</option>
                     </select>
                     <button type="button" onclick="addBebidaInput()">Agregar otra bebida</button>
                </td>
            </tr>
            <td><input type="number" class="input-styles" placeholder="Precio"></td>
                 <td><input type="file" id="imageInput" accept="image/*"></td>
            <td>
                <button class="save-item">Guardar</button>
                <button class="cancel-item">Cancelar</button>
            </td>
            `,

        url: 'http://localhost:8080/promotions/add'
    }
};

let isAdding = false; // Controla si ya hay una fila de inputs abierta
//FUNCION PARA EDITAR QUE RECIBE LA SECCION
export const addItem = (section) => {


    //de la seccion obtenemos la tableId, los datos que se suben y la url
    const { tableId, createRow, url } = sections[section];
    const sections_todo = document.getElementById(tableId);

    const table = sections_todo.querySelector("table");
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
        toggleColumns(section)
        if (section == "insumos") {
            agregarInsumos("insumo")
            //llama a la funcion para obtener el proveedor
            obtener_proveedor(newRow)
            //llama a la funcion para que aparezcan los proveedores
            categoriaCompletarProveedor()

            //FUNCION PARA OPTENER LA FEHCA

        } else if (section == "personal") {
            //llama a la funcion para obtener los horarios
            obtener_horarios(newRow)
        } else if (section == "promociones") {
            const platos = platos_todos
            const bebidas = bebidas_todas
            completarPlatosBebidasSelect(platos, bebidas)

            // Llamar a la función para llenar los selects

        } else if (section == "proveedores") {
            agregarInsumos("proveedor")
        } else if (section == "platos") {
            articulosPLatos(tabla_nombre_insumos)
        }
        // Evento "Cancelar" para eliminar la fila de inputs
        newRow.querySelector('.cancel-item').addEventListener('click', function () {
            table.removeChild(newRow);
            isAdding = false;
            toggleColumns(section)
        });

        // Evento "Guardar" para convertir la fila de inputs en una fila de datos
        newRow.querySelector('.save-item').addEventListener('click', function () {
            saveData(section, newRow, url, null)

        });
    });

};
export const saveData = async (section, newRow, url, urlEditar) => {
    const inputs = newRow.querySelectorAll('input');
    const values = Array.from(inputs).map(input => input.value);
    // Verificar si todos los campos están completos
    if (values.some(value => value.trim() === "")) {
        alert("Por favor, complete todos los campos antes de guardar.");
        return;
    }
    toggleColumns(section)

    const additionalData = {};
    if (section === 'insumos') {
        console.log(newRow);
        additionalData.proveedor = newRow.querySelector('#proveedor').textContent;
        additionalData.category = newRow.querySelector('#categoria_select').value;
        additionalData.lastPurchased = newRow.querySelector('#ultima-compra').value
    } else if (section === 'personal') {
        additionalData.state = newRow.querySelector('#estado').value;
        additionalData.charge = newRow.querySelector('#charge').value;
    } else if (section === 'platos' || section == 'promociones') {
        if (urlEditar == null) {
            const fileInput = document.getElementById('imageInput');
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    const byteArray = new Uint8Array(event.target.result);
                    enviarData(byteArray, section, values, additionalData, url, urlEditar, newRow);
                };
                reader.readAsArrayBuffer(file);
            } else {
                enviarData(null, section, values, additionalData, url, urlEditar, newRow);
            }
        } else {
            enviarData(null, section, values, additionalData, url, urlEditar, newRow);
        }

        return;
    }
    enviarData(null, section, values, additionalData, url, urlEditar, newRow);
}
const enviarData = async (byteArray, section, values, additionalData, url, urlEditar, newRow) => {
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
            provider: Number(additionalData.proveedor), // Proveedor (quinto input)
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
        //seleccionar las celdas
        const articulos = document.getElementById('articulo-cell')
        const articulo_pedido = articulos.querySelectorAll("select")
        const idPlatos = Array.from(articulo_pedido).map(input => input.value);
        const articulosPedido = []
        idPlatos.forEach(articuloId => {
            // Buscar si ya existe un artículo con el mismo articleId en articulosPedido
            const articuloExistente = articulosPedido.find(art => art.articleId === articuloId);

            if (articuloExistente) {
                // Si el artículo ya existe, aumentamos la cantidad
                articuloExistente.quantity += 1;
            } else {
                // Si el artículo no existe, lo agregamos a articulosPedido
                articulosPedido.push({ articleId: articuloId, quantity: 1 });
                console.log(`Agregando nuevo artículo: articleId ${articuloId} con cantidad: 1`);
            }
        });
        console.log(articulosPedido);


        newItem = { // Asignar el último platoId más uno
            name: values[0], // Nombre del input
            description: values[4], // Descripción del input
            type: newRow.querySelector('#tipo').value, // Tipo del plato (select)
            price: Number(values[1]), // Precio Venta (cuarto input)
            available: true, // Avaliable (puedes ajustar esto según sea necesario)
            stock: Number(values[2]), // Stock (octavo input)
            imageData: Array.from(byteArray),
            articles: articulosPedido,// Datos de la imagen (si existe)
        };
    } else if (section == 'proveedores') {
        const input = document.getElementById("articleInput").value;
        const arti = input.split(",").map(value => value.trim());
        const articles = arti.map(value => `${value}`);

        const container_product = document.getElementById("cell_poduct")


        const product = container_product.querySelectorAll("select")
        const productValues = Array.from(product).map(input => input.value);



        // Dividir el valor ingresado por comas

        // Crear el formato deseado

        newItem = {
            name: values[0],
            product: productValues,
            shippingCost: Number(values[values.length - 3]),
            phoneNumber: Number(values[values.length - 2]),
            articles: articles,
        }
    } else if (section == "promociones") {


        //seleccionar las celdas
        const platos = document.getElementById('plato-cell')
        const bebidas = document.getElementById('bebida-cell')


        //selecciona todos los select
        const plato_pedido = platos.querySelectorAll("select")
        const bebida_pedido = bebidas.querySelectorAll("select")
        //agarra todos los valores
        const idPlatos = Array.from(plato_pedido).map(input => input.value);
        const idBebidas = Array.from(bebida_pedido).map(input => input.value);
        const platosPedido = []
        //comprar los valores con el id para ver si concuerdan
        idPlatos.forEach(idPLato => {
            platos_todos.forEach((platoComparacion) => {
                if (idPLato == platoComparacion.id) {

                    platosPedido.push({ plateName: platoComparacion.name, price: Number(platoComparacion.price) });


                }
            });
        })
        const bebidasPedido = []
        idBebidas.forEach(idBebida => {
            bebidas_todas.forEach((bebidaComparacion) => {

                if (idBebida == bebidaComparacion.id) {
                    bebidasPedido.push({ plateName: bebidaComparacion.name, price: Number(bebidaComparacion.price) });

                }
            });
        })

        newItem = { // Asignar el último platoId más uno
            name: values[0], // Nombre del input
            precio: Number(values[1]), // Avaliable (puedes ajustar esto según sea necesario)
            imageData: Array.from(byteArray),
            platos: platosPedido, // Tipo del plato (select)
            bebidas: bebidasPedido,  // Precio Venta (cuarto input)
            available: true

        };
    }

    console.log(newItem); // Para verificar el objeto creado antes de enviarlo

    // Envío de datos a la API

    if (url == null) {
        if (await api_editar(urlEditar, newItem)) {

            location.reload(); // 
        }

    } else {

        sendDataToApi(newItem, url)
    }



    isAdding = false; // Permitimos agregar una nueva fila
};


// Inicializar los listeners
for (const section in sections) {
    addItem(section);
}
//FUNCION PARA MOSTRAR LAS OTRAS COLUMNAS
function toggleColumns(section) {
    if (section === "platos" || section === "promociones") {
        if (section === "platos") {

            var columnas = document.querySelectorAll("#imagenes, #description, #articulos");
            var estado = document.getElementById('estado')
            columnas.forEach(columna => {
                // Alterna la visibilidad de cada columna
                if (columna.style.display === "none" || columna.style.display === "") {
                    columna.style.display = "table-cell"; // Muestra la columna
                    estado.style.display = "none"
                } else {
                    columna.style.display = "none"; // Oculta la columna
                    estado.style.display = "table-cell"
                }
            });
        } else if (section === "promociones") {
            var estado = document.getElementById('estado_promo')
            var columna = document.querySelector("#imagenes_promo");
            if (columna.style.display === "none" || columna.style.display === "") {
                columna.style.display = "table-cell"; // Muestra la columna
                estado.style.display = "none"
            } else {
                columna.style.display = "none"; // Oculta la columna
                estado.style.display = "table-cell"
            }
        }
        // Selecciona las columnas por clase o ID

    }




}



export function addArticulo() {
    const containerArticulo = document.getElementById('articulo-cell')
    const newInput = document.createElement("select");
    newInput.classList.add("articulo-select")
    // Crear un botón para eliminar este select
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Eliminar";
    deleteButton.onclick = function () {
        containerArticulo.removeChild(deleteButton);
        containerArticulo.removeChild(newInput);
    };

    containerArticulo.appendChild(newInput);
    containerArticulo.appendChild(deleteButton);
    articulosPLatos(tabla_nombre_insumos);
}

export function addProductSelect() {
    const containerProduct = document.getElementById('cell_poduct')

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
    // Añadir el contenedor en la celda antes del botón "Agregar otro producto"
    productCell.insertBefore(inputContainer, productCell.lastElementChild);
    agregarInsumos("proveedor")

 
}





export function addPlatoInput() {


    const platos = platos_todos


    const bebidas = bebidas_todas

    const platoCell = document.getElementById('plato-cell');

    // Crear un contenedor para el nuevo input y el botón de eliminar
    const inputContainer = document.createElement("div");
    inputContainer.className = "plato-select-container";


    // Crear un nuevo input para producto
    const newInput = document.createElement("select");
    newInput.option = "Platos";
    newInput.className = "plato-select"

    // Crear un botón para eliminar este input
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Eliminar";
    deleteButton.onclick = function () {
        platoCell.removeChild(inputContainer);
    };

    // Añadir el input y el botón de eliminar al contenedor
    inputContainer.appendChild(newInput);
    inputContainer.appendChild(deleteButton);

    // Añadir el contenedor en la celda antes del botón "Agregar otro producto"
    platoCell.insertBefore(inputContainer, platoCell.lastElementChild);
    completarPlatosBebidasSelect(platos, bebidas);


}
export function addBebidaInput() {
    const platos = platos_todos


    const bebidas = bebidas_todas
    const bebidaCell = document.getElementById('bebida-cell');

    // Crear un contenedor para el nuevo input y el botón de eliminar
    const inputContainer = document.createElement("div");
    inputContainer.className = "plato-select-container";


    // Crear un nuevo input para producto
    const newInput = document.createElement("select");
    newInput.option = "Bebidas";
    newInput.className = "bebida-select"

    // Crear un botón para eliminar este input
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Eliminar";
    deleteButton.onclick = function () {
        bebidaCell.removeChild(inputContainer);
    };

    // Añadir el input y el botón de eliminar al contenedor
    inputContainer.appendChild(newInput);
    inputContainer.appendChild(deleteButton);

    // Añadir el contenedor en la celda antes del botón "Agregar otro producto"
    bebidaCell.insertBefore(inputContainer, bebidaCell.lastElementChild);
    completarPlatosBebidasSelect(platos, bebidas);

}


// Ejemplo de uso

window.addPlatoInput = addPlatoInput;
window.addArticulo = addArticulo;
window.addBebidaInput = addBebidaInput;
window.addProductSelect = addProductSelect;