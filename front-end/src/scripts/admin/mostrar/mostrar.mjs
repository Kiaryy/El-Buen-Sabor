// Importa la función `last_id` desde el archivo correspondiente
// 

import { last_id } from "../lastId.mjs";


// Inicializa los últimos IDs para cada tipo de entidad
export const lastIds = {
    bebidas: null,
    compras: null,
    ventas: null,
    insumos: null,
    personal: null,
    platos: null,
    promociones: null,
    proveedores: null
};
// export const 

// Configuración general de cada tipo de entidad
export const entityConfig = {
    bebidas: { columns: ['id', 'nombre', 'descripcion', 'precio', 'stock'], idKey: 'id' },
    compras: { columns: ['id','provider', 'purchaseDate', 'itemsPurchased'], idKey: 'id' },
    ventas: { columns: ['id', 'dateSale', 'nameofUser', 'pedido', 'cards'], idKey: 'id' },
    insumos: { columns: ['articleId', 'name', 'category', 'provider', 'priceUnit', 'precioCompra', 'stockActual', 'existencies', 'lastPurchased'], idKey: 'articleId' },
    personal: { columns: ['name', 'charge', 'shift', 'hourlySalary', 'absences', 'phoneNumber', 'state'], idKey: 'id' },
    platos: { columns: ['platoId', 'name', 'type','price', 'stock','available'], idKey: 'platoId' },
    promociones: { columns: ['id', 'name','platos', 'bebidas', 'precio','available'], idKey: 'id' },
    proveedores: { columns: ['id', 'name', 'product', 'shippingCost', 'phoneNumber', 'articles'], idKey: 'id' }
};
//Se crea y se exporta los datos
export const platos_todos = [];
export const bebidas_todas = [];
export const proveedores_producto_id={}
export const tabla_insumos=[];
export const tabla_nombre_insumos=[]
export const proveedores_nombre=[]

// Función genérica para obtener y mostrar datos de cualquier entidad
export const obtenerDatos = async (entity, url, table) => {
    console.log(entity);
    
    const config = entityConfig[entity];

    try {
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) throw new Error('Error en la solicitud: ' + response.status);
        
        const data = await response.json();
        const promises = data.map(item => {
          
            let tr = document.createElement('tr');
            //se le agrega una clase a la tr segun el ide del item
            tr.classList.add(`fila${item[config.idKey]}`);
            
            if (entity === "proveedores" || entity === "insumos" || entity==="bebidas") {
                
                if (entity === "proveedores") {
                    //ser guarda en proveedores el producto con valor del id
                    proveedores_producto_id[item[config.columns[2]]] = item[config.idKey];
                    proveedores_nombre.push({nombre:item[config.columns[1]], id:item[config.columns[0]], precio:item[config.columns[3]]})
                }else if(entity=="bebidas"){
                    bebidas_todas.push({ id: item[config.idKey], name: item[config.columns[1]],price:item[config.columns[2]] });
                 
                    
                }
                    else{
                        if (!tabla_insumos.find(insumo => insumo.name === item[config.columns[3]])) {
                            // Si no lo contiene, agrega un nuevo objeto con el 'name'
                            tabla_insumos.push({ name: item[config.columns[3]] });
                        }
                        if (!tabla_nombre_insumos.find(insumo => insumo.name === item[config.columns[1]])) {
                            // Si no lo contiene, agrega un nuevo objeto con el 'name'
                            tabla_nombre_insumos.push({ name: item[config.columns[1]], id: item[config.columns[0]]});
                        }
                    }
                    //valida si tabla en insumo ya existe el nombre del insumo
                    
                
                //se agrega los valores y boton de editar
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                `
                <td>
                <button onclick="editItem(${item[config.idKey]}, '${entity}')">
                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                </button>
                </td>
                `;
            } else if (entity === "compras" || entity === "ventas") {
                //se agrega solo los valores
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('');
            } else if (entity === "platos") {
                //valida si esta habilitado el plato
                if (item[config.columns[5]]!=false) {
                    
                    
                platos_todos.push({ id: item[config.idKey], name: item[config.columns[1]] , price:item[config.columns[2]]});
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                    `
                    <td>
                        <button onclick="toggleStatus(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                        </button>
                    </td>
                    `;
                }
                //Agrega los valores y el boton de deshabilitar
                
                  
               
            } 
            else if (entity == "promociones") {
                if (item[config.columns[5]]!=false) {
                    
                    tr.innerHTML = config.columns.map(col => {
                        if (col === "platos") {
                            // Crear una lista de nombres de platos concatenados en una sola celda
                            const listItem = item.platos.map(plate => plate.plateName).join(', ');
                            return `<td>${listItem !== undefined ? listItem : 'falta'}</td>`;
                        }else if (col==="bebidas") {
                            const listItem = item.bebidas.map(plate => plate.plateName).join(', ');
                            return `<td>${listItem !== undefined ? listItem : 'falta'}</td>`;
                        } else {
                            // Para el resto de las columnas, simplemente mostramos el valor o 'falta' si no está definido
                            return `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`;
                        }
                    }).join('') + `
                    
                        <td>
                            <button onclick="toggleStatus(${item[config.idKey]}, '${entity}')">
                                <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                            </button>
                        </td>
                        `;
                }
                
            }
            
            else {
                //se agrega el valor y el boton de editar
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                    `
                    <td>
                        <button onclick="editItem(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                        </button>
                        
                    </td>
                    `;
            }

            table.appendChild(tr);
        });

        // Espera que todas las promesas se resuelvan
        await Promise.all(promises);
        
        // Guarda el último ID de la entidad
        lastIds[entity] = last_id(data, config.idKey);

        // Muestra la alerta después de que se han cargado todos los datos
        alert(`Los productos de: ${entity} ya estan cargadas`);
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
   
};

// Exporta los IDs últimos
const guardar_datos_provedor=()=>{

}