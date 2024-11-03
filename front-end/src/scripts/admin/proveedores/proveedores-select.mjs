export const proveedores_select=(selectCategoria,celdas,estado)=>{
 
           
            const categoriaSeleccionada = selectCategoria.value;
            const proveedor = proveedoresPorCategoria[categoriaSeleccionada] || ''; // Obtener el proveedor o un valor vacío
    
            // Actualizar la celda 4 con el proveedor correspondiente
            if (estado =="add") {
                
                celdas[3].textContent = proveedor;  // O celdas[4].innerHTML si necesitas agregar HTML
            }else{
                celdas[4].textContent = proveedor;  // O celdas[4].innerHTML si necesitas agregar HTML

            }
        
}

const proveedoresPorCategoria = {
    Vegetal: 'YAGUAR',
    Carne: 'PATTY',
    Lácteos: 'SERENISIMA',
    Frutas: 'BIMBO',  // Ejemplo
    Hongo: 'Proveedor Hongo',  // Define según corresponda
    Legumbres: 'Proveedor Legumbres',  // Define según corresponda
    Salsa: 'KANSAS',
    Azúcar: 'LEDESMA',
    Especias: 'ABUANA',
    'Salsa de caramelo': 'Proveedor Salsa de Caramelo',  // Define según corresponda
    Cereales: 'Proveedor Cereales',  // Define según corresponda
    Aderezos: 'KANSAS',  // Ejemplo
};
