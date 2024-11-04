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

// Configuración general de cada tipo de entidad
export const entityConfig = {
    bebidas: { columns: ['id', 'nombre', 'descripcion', 'precio', 'stock'], idKey: 'id' },
    compras: { columns: ['id', 'falta', 'provider', 'purchaseDate', 'itemsPurchased', 'falta', 'falta', 'falta'], idKey: 'id' },
    ventas: { columns: ['id', 'dateSale', 'nameofUser', 'pedido', 'falta', 'cards', 'falta'], idKey: 'id' },
    insumos: { columns: ['articleId', 'name', 'denominacion', 'category', 'provider', 'priceUnit', 'precioCompra', 'stockActual', 'existencies', 'lastPurchased'], idKey: 'articleId' },
    personal: { columns: ['name', 'charge', 'shift', 'hourlySalary', 'absences', 'phoneNumber', 'state'], idKey: 'id' },
    platos: { columns: ['platoId', 'name', 'id', 'price', 'falta', 'falta', 'stock'], idKey: 'platoId' },
    promociones: { columns: ['id', 'falta', 'platos', 'bebidas', 'precio', 'falta', 'falta', 'falta'], idKey: 'id' },
    proveedores: { columns: ['id', 'falta', 'purchaseDate', 'itemsPurchased', 'falta', 'falta', 'falta'], idKey: 'id' }
};

// Función genérica para obtener y mostrar datos de cualquier entidad
export const obtenerDatos = (entity, url, table) => {
    console.log(entity);
    
    const config = entityConfig[entity];
    
    fetch(url, { method: 'GET' })
    .then(response => {
        if (!response.ok) throw new Error('Error en la solicitud: ' + response.status);
        return response.json();
    })
    
    .then(data => {
        data.forEach(item => {
            if (entity=="personal") {
                
   
                config.columns.map(col =>console.log(col,"=",item[col]));
            }
            let tr = document.createElement('tr');
                tr.classList.add(`fila${item[config.idKey]}`);
              

                // Genera las celdas de la fila en función de las columnas definidas en la configuración
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

                table.appendChild(tr);
            });

            // Guarda el último ID de la entidad
            lastIds[entity] = last_id(data, config.idKey);
        })
        .catch(error => console.error('Hubo un problema con la solicitud:', error));
};

// Exporta los IDs últimos
