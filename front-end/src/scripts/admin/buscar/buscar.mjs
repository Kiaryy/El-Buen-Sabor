const button_buscar =document.getElementById('buscar')
const secciones=document.querySelectorAll('.content-section')
button_buscar.addEventListener("input",()=>{
  
        modificar_vista(button_buscar.value)
    
    
})


const modificar_vista=(valor)=>{
    const savedSection = localStorage.getItem("activeSection");
    const seccion=document.getElementById(savedSection);
    const fila=seccion.querySelectorAll('tr')
    fila.forEach(tr => {
    
        
        if (valor!="") {
            
            
            let encontro=false
            const valores=tr.querySelectorAll('td')
            if (!tr.classList.contains("data-name")) {
                valores.forEach(td => {
                    
        
                    
                    if (td.textContent.toLowerCase().includes(valor.toLowerCase())) {
                        console.log(td.textContent)
                        encontro =true
                        return encontro
                     }
                 });
            
                 
                 if (encontro) {
                     tr.classList.remove("hide")
                     
                 }else{
                     tr.classList.add("hide")
                     
                 }
            } 

        }else{
      
            
            tr.classList.remove("hide")
        }
       
       
       })
   
    
 
    
    
    
}