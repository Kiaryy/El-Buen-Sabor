
export const cargos=(cargoEmpleado,celdas)=>{
    const cargoSeleccionado = cargoEmpleado.value;
    const cargo = cargosEmpleados[cargoSeleccionado] || '';

        celdas[2].textContent = cargo;  // O celdas[4].innerHTML si necesitas agregar HTML
   
}
const cargosEmpleados={
    
    CASHIER:"Mon to Fri 08:00am to 00:30am, Sat and Sun 11:00am to 15:30pm",
    MANAGER:"Mon to Fri 08:00am to 00:30am, Sat and Sun 11:00am to 15:30pm",
    DELIVERY:"Mon to Fri 08:00am to 00:30am, Sat and Sun 11:00am to 15:30pm", 
    CHEF:"Mon to Fri 07:00am to 01:00am, Sat and Sun 1:00am to 14:00pm"
}