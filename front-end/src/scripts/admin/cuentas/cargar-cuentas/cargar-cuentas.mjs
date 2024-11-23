const section_cuentas=document.getElementById('cuentas')
const table=section_cuentas.querySelector('table')

try {
    const response = await fetch('http://localhost:8080/contabilidad/findCuentas', { method: 'GET' });
    const data = await response.json();
    data.forEach(data => {
    
        
        let tr = document.createElement('tr');
        tr.innerHTML=`
            <td>${data.id}</td>
            <td>${data.nombre}</td>
            <td>${data.saldo}</td>
        
        `
        table.appendChild(tr)
    });
} catch (error) {
    
}