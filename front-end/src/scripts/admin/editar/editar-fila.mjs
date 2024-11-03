import { editar_bebidas } from "./editar-ariticulo-especifico/editar-bebidas.mjs";
import { proveedores_select } from"../proveedores/proveedores-select.mjs";
let isAdding = false;

export const editar_fila = (id, seccion) => {
    if (isAdding) {
        alert('Ya estas editando una fila. Guarde o cancele antes de editar otro.');
        return;
    }
    const div = document.getElementById(`${seccion}`)
    isAdding = true;
    const fila = div.querySelector(`tr.fila${id}`)
    const celdas = fila.querySelectorAll('td');
    const valoresOriginales = Array.from(celdas, celda => celda.textContent.trim());
    let valorOriginalUltimo = celdas[celdas.length - 1].innerHTML

//AGREGAR EL BOTON PARA ELEGIR LAS CATEGORIA PRE DEFINIDAS Y QUE SE PONGAN LOS PROVEEDORES AUTOMATICO
    if (seccion == "insumos") {
        celdas.forEach((celda, index) => {
            if (index != 0) {
                celda.innerHTML = `
                <input type="text" class="input-styles"value="${celda.textContent.trim()}">
                `
            }
        });
     
        celdas[3].innerHTML = `
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
        `
        
        // Añadir un evento al select
        
    const selectCategoria = document.getElementById('categoria_select');

    
    selectCategoria.addEventListener('change', function () {
        proveedores_select(selectCategoria,celdas,'s')
    })
        
    } else {

        celdas.forEach((celda, index) => {
            if (index != 0) {
                celda.innerHTML = `
                <input type="text" class="input-styles"value="${celda.textContent.trim()}">
                `
            }
        });

    }
    //CAMBIO LA PARTE DE OPCINES
    let opciones = celdas[celdas.length - 1]
    opciones.innerHTML = `
    <td>
    <button class="save-item">Guardar</button>
    <button class="cancel-item">Cancelar</button>
    </td>
    `
    //EVENTO SI TOCA CANCELAR , SE REGRESA COMO ESTABA ANTES
    fila.querySelector('.cancel-item').addEventListener('click', function () {
        celdas.forEach((celda, index) => {


            if (index != 0) {
                celda.textContent = valoresOriginales[index]
            }
            if (index == (celdas.length - 1)) {
                celda.innerHTML = `${valorOriginalUltimo}`


            }
        });
        isAdding = false;
    });
    //EVENTO SI TOCA GUARDAR , SE ENVIA A LA API
    fila.querySelector('.save-item').addEventListener('click', function () {
        const inputs = fila.querySelectorAll('input');
        const values = Array.from(inputs).map(input => input.value);
        console.log(values);

        if (values.some(value => value.trim() === "")) {
            alert("Por favor, complete todos los campos antes de guardar.");
            return;
        }
        if (seccion == "bebidas") {
            editar_bebidas(values, id)
        }

        isAdding = false;

    })

}