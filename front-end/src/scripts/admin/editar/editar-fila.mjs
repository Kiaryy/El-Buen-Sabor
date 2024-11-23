
import { proveedores_select ,categoriaCompletarProveedor} from "../agregar/obtener-provedores/obtener_proveedores.mjs";
import { cargos } from "../agregar/cargos/cargos.mjs";
import { saveData } from "../agregar/agregar.mjs";
import { agregarInsumos } from "../agregar/obtener-insumos/agregar-insumo.mjs";
let isAdding = false;

export const editar_fila = (id, seccion) => {
    if (isAdding) {
        alert('Ya estas editando una fila. Guarde o cancele antes de editar otro.');
        return;
    }
    const div = document.getElementById(`${seccion}`)
    isAdding = true;

    const fila = div.querySelector(`tr.fila${id}`)
    console.log(fila);
    
    const celdas = fila.querySelectorAll('td');
    const valoresOriginales = Array.from(celdas, celda => celda.textContent.trim());
    let valorOriginalUltimo = celdas[celdas.length - 1].innerHTML

//AGREGAR EL BOTON PARA ELEGIR LAS CATEGORIA PRE DEFINIDAS Y QUE SE PONGAN LOS PROVEEDORES AUTOMATICO
    celdas.forEach((celda, index) => {
        console.log(celdas.value);
        
        if (seccion=="personal") {
            celda.innerHTML = `
            <input type="text" class="input-styles"value="${celda.textContent.trim()}">
            `
        }else{
            if (index != 0) {
                celda.innerHTML = `
                <input type="text" class="input-styles"value="${celda.textContent.trim()}">
                `
            }
        }
     
    });
    if (seccion == "insumos") {
     
        
        celdas[2].innerHTML=`
        <select id="categoria_select"> 
                <option>CATEGORIA</>
                </select>
        `
    
        // Añadir un evento al select
        agregarInsumos("insumos")
        categoriaCompletarProveedor()
    const selectCategoria = document.getElementById('categoria_select');
    celdas[celdas.length-2].id="ultima-compra"
    celdas[celdas.length-2].innerHTML=valoresOriginales[celdas.length-2]
    
    
    selectCategoria.addEventListener('change', function () {
        proveedores_select(selectCategoria,celdas,'s')
    })
        
    }else if (seccion=="personal") {
        celdas[1].innerHTML=`
           <select id="charge">
           <option>Categoria</option>
           <option>CAJERO</option>
           <option>MANAGER</option>
           <option>DELIVERY</option>
           <option>CHEF</option>
              </select>
        `
        celdas[6].innerHTML=`
              <select id="estado">
                    <option>ESTADO</option>
                    <option>ACTIVO</option>
                    <option>INACTIVO</option>
                    <option>VACACION</option> 
                </select>
        `
   
    const cargoEmpleado = document.getElementById('charge');

    cargoEmpleado.addEventListener('change', function () {
        cargos(cargoEmpleado,celdas)
    })
        
    }
   
    //CAMBIO LA PARTE DE OPCINES
    let opciones = celdas[celdas.length - 1]
    console.log(opciones);
    
    opciones.innerHTML = `
    <td>
    <button class="save-item">Guardar</button>
    <button class="cancel-item">Cancelar</button>
    </td>
    `
    //EVENTO SI TOCA CANCELAR , SE REGRESA COMO ESTABA ANTES
    fila.querySelector('.cancel-item').addEventListener('click', function () {
        celdas.forEach((celda, index) => {
            celda.textContent = valoresOriginales[index]
            if (seccion=="personal") {
                    if (index == (celdas.length - 1)) {
                        celda.innerHTML = `${valorOriginalUltimo}`

                    }
                
            }else{
                if (index != 0) {
                   
              
                if (index == (celdas.length - 1)) {
                    celda.innerHTML = `${valorOriginalUltimo}`
    
    
                }
            }
            }

          
        });
        isAdding = false;
    });
    //EVENTO SI TOCA GUARDAR , SE ENVIA A LA API
    fila.querySelector('.save-item').addEventListener('click', function () {
        const inputs = fila.querySelectorAll('input');
        const values = Array.from(inputs).map(input => input.value);
   

        if (values.some(value => value.trim() === "")) {
            alert("Por favor, complete todos los campos antes de guardar.");
            return;
        }
        if (seccion == "bebidas") {
            var url=`http://localhost:8080/bebidas/${id}`
            // var url=`http://localhost:8080/bebidas/${id}`
    
        }else if (seccion=="personal") {
            // var url=`http://localhost:8080/article/${id}`
            var url=`http://localhost:8080/employees/${id}`
        }else if (seccion=="insumos") {
            var url=`http://localhost:8080/article/${id}`
            // var url=`http://localhost:8080/article/${id}`
        }else if(seccion="proveedores"){
            var url=`http://localhost:8080/providers/${id}`
            // var url=`http://localhost:8080/providers/${id}`
            
        }
        console.log(url);
        
        saveData(seccion,fila,null,url)
        isAdding = false;

    })

}