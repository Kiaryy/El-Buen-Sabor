const seccion_asientos=document.getElementById('asientos')
const table=seccion_asientos.querySelector('#tabla-asientos')
console.log(table);

try {
    const response = await fetch('http://localhost:8080/contabilidad/findAsientos', { method: 'GET' });
    const data = await response.json();

    
    data.forEach(data => {

        let tr = document.createElement('tr');
        tr.innerHTML=`
            <td>${data.id}</td>
            <td>${data.fecha}</td>
            <td>${data.cuenta.nombre}</td>
            <td>${data.debe}</td>
            <td>${data.haber}</td>
            <td>${data.cuenta2.nombre}</td>
            <td>${data.debe2}</td>
            <td>${data.haber2}</td>
    
        
        `
        table.appendChild(tr)
    });
} catch (error) {
    
}