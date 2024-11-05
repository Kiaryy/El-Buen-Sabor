
export const cargos=(cargoEmpleado,celdas)=>{
    const cargoSeleccionado = cargoEmpleado.value;
    const cargo = cargosEmpleados[cargoSeleccionado] || '';

        celdas[2].textContent = cargo;  // O celdas[4].innerHTML si necesitas agregar HTML
   
}
const cargosEmpleados={
    
    CAJERO:"Lun a Vie 08:00am a 00:30am, Sab y Dom 11:00am a 15:30pm",
    MANAGER:"Lun a Vie 08:00am a 00:30am, Sab y Dom 11:00am a 15:30pm",
    DELIVERY:"Lun a Vie 08:00am a 00:30am, Sab y Dom 11:00am a 15:30pm", 
    CHEF:"Lun a Vie 07:00am a 01:00am, Sab y Dom 1:00am a 14:00pm"
}
