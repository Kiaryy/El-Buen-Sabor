// Importa la función `last_id` desde el archivo correspondiente
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
    insumos: { columns: ['articleId', 'name', 'denominacion', 'category', 'provider', 'priceUnit', 'precioCompra', 'stockActual', 'existencies', 'lastPurchased'], idKey: 'articleId' },
    personal: { columns: ['name', 'charge', 'shift', 'hourlySalary', 'absences', 'phoneNumber', 'state'], idKey: 'id' },
    platos: { columns: ['platoId', 'name', 'price', 'stock','available'], idKey: 'platoId' },
    promociones: { columns: ['id', 'falta', 'platos', 'bebidas', 'precio', 'falta', 'falta', 'falta'], idKey: 'id' },
    proveedores: { columns: ['id', 'name', 'product', 'shippingCost', 'phoneNumber', 'articles'], idKey: 'id' }
};

export const proveedores_producto_id={}
export const platos_todos = [];
export const bebidas_todas = [];


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
            tr.classList.add(`fila${item[config.idKey]}`);
            
            if (item[config.columns[4]]==false) {
                tr.classList.add("deshabilitado")
                
            }
            if (entity === "proveedores" || entity === "insumos") {
                if (entity === "proveedores") {
                    proveedores_producto_id[item[config.columns[2]]] = item[config.idKey];
                }
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                    `
                    <td>
                        <button onclick="editItem(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                        </button>
                    </td>
                    `;
            } else if (entity === "compras" || entity === "ventas") {
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('');
            } else if (entity === "platos") {
                
                platos_todos.push({ id: item[config.idKey], name: item[config.columns[1]] },);
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                    `
                    <td>
                        <button onclick="toggleStatus(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                        </button>
                    </td>
                    `;
                  
               
            } else if (entity === "bebidas") {
                bebidas_todas.push({ id: item[config.idKey], nombre: item[config.columns[1]] });
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                    `
                    <td>
                        <button onclick="editItem(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                        </button>
                        <button onclick="toggleStatus(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                        </button>
                    </td>
                    `;
            } else {
                tr.innerHTML = config.columns.map(col => `<td>${item[col] !== undefined ? item[col] : 'falta'}</td>`).join('') +
                    `
                    <td>
                        <button onclick="editItem(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                        </button>
                        <button onclick="toggleStatus(${item[config.idKey]}, '${entity}')">
                            <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
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
        alert(`Los prouductos de:${entity} ya estan cargadas`);
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
};

// Exporta los IDs últimos
const guardar_datos_provedor=()=>{

}