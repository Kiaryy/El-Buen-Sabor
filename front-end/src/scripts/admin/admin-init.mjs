const sections_admin = document.getElementById('platos');
const table = sections_admin.querySelector("table");
let isAdding = false; // Controla si ya hay una fila de inputs abierta

// Función para cargar los datos de la API al cargar la página
window.onload = async function () {
    const url = 'https://bsapi-latest.onrender.com/platos/findAll';
    
    fetch(url, {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.platoId}</td>
                <td>${item.name}</td>
                <td>${item.id}</td>
                <td>${item.price}</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>${item.stock}</td>
                <td>
                    <button onclick="editItem()">
                        <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                    </button>
                    <button onclick="deleteItem()">
                        <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/delete.png" alt="eliminar" title="Eliminar">
                    </button>
                    <button onclick="toggleStatus()">
                        <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                    </button>
                </td>
            `;
            table.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
};

// Función para agregar una nueva fila con inputs al principio de la tabla
document.getElementById('add-item').addEventListener('click', function() {
    if (isAdding) {
        alert('Ya hay una fila abierta. Guarde o cancele antes de agregar una nueva.');
        return;
    }

    let newRow = document.createElement('tr');
    isAdding = true;
    newRow.innerHTML = `
        <td><input type="text"   class="input-styles" placeholder="ID"></td>
        <td><input type="text"   class="input-styles" placeholder="Nombre"></td>
        <td class="input-styles">N/A</td>
        <td><input type="number" class="input-styles" placeholder="Precio Venta"></td>
        <td class="input-styles">N/A</td>
        <td class="input-styles">N/A</td>
        <td><input type="number" class="input-styles" placeholder="Stock"></td>
        <td>
            <button class="save-item">Guardar</button>
            <button class="cancel-item">Cancelar</button>
        </td>
    `;

    // Insertamos la nueva fila al principio, justo después del encabezado
    table.insertBefore(newRow, table.rows[1]);

    // Evento "Cancelar" para eliminar la fila de inputs
    newRow.querySelector('.cancel-item').addEventListener('click', function() {
        table.removeChild(newRow);
        isAdding = false;
    });

    // Evento "Guardar" para convertir la fila de inputs en una fila de datos
    newRow.querySelector('.save-item').addEventListener('click', function() {
        const inputs = newRow.querySelectorAll('input');
        const values = Array.from(inputs).map(input => input.value);

        // Verificar si todos los campos están completos
        if (values.some(value => value.trim() === "")) {
            alert("Por favor, complete todos los campos antes de guardar.");
            return;
        }

        // Convertimos la fila de inputs en una fila de datos de texto
        newRow.innerHTML = `
            <td>${values[0]}</td>
            <td>${values[1]}</td>
            <td>N/A</td>
            <td>${values[2]}</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>${values[3]}</td>
            <td>
                <button onclick="editItem()">
                    <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/edit.png" alt="editar" title="Editar">
                </button>
                <button onclick="deleteItem()">
                    <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/delete.png" alt="eliminar" title="Eliminar">
                </button>
                <button onclick="toggleStatus()">
                    <img src="/front-end/IMAGENES BUEN SABOR/ADMIN/avaliable.png" alt="habilitar/deshabilitar" title="Habilitar/Deshabilitar">
                </button>
            </td>
        `;
        isAdding = false; // Permitimos agregar una nueva fila
    });
});
