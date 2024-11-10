

export const  llamar_api=(asiento)=>{
    const apiEndpoint = 'http://localhost:8080/contabilidad/registrar-asiento';
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(asiento)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    
    .catch((error) => {
        // console.error('Error:');
    });
    
    aumentar_prove()
    
}
const aumentar_prove=()=>{
    const idProveedor=document.getElementById('nombre_proveedor').value;
    

    console.log(typeof idProveedor);
    const id = `http://localhost:8080/providers/purchase/${idProveedor}`;
fetch(id, {
    method: 'POST',
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    alert("asiento registrado")
    return response.json();
})

.catch((error) => {
    // console.error('Error:');
});
    alert("productos agregago al stock")
}
