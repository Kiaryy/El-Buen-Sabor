const regex={

    nombre:/^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    email:/^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/,
    direccion:/^[a-zA-ZÀ-ÿ\s]{4,30}$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,12}$/,
    repetir:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,12}$/,
}
export const vali=()=>{
    const parrafo=document.getElementsByTagName('p')
    const input=document.querySelectorAll('#sign-up input, #button-sign-up')
    var contra=""
    input.forEach(input=>{
        //cada ves que se ingrese una tecla
        input.addEventListener('keydown',()=>{
            if (input.name=="password") {
                contra=input.name
                
            }
            if (input.name=="repetir") {
                
                if (input.name==contra) {
                    parrafo[4].classList.add('hide')
                    valueRegex.repetir=true
                }else{
                    parrafo[4].classList.remove('hide')
    
                }
            }
            else{
                validation(input.name,input.value) 
            }
        })
          //cada ves que deje de hacer foco
        input.addEventListener('blur',()=>{
            if (input.name=="password") {
                contra=input.name
                
            }
            if (input.name=="repetir") {
                
                if (input.name==contra) {
                    parrafo[4].classList.add('hide')
                    valueRegex.repetir=true
                }else{
                    parrafo[4].classList.remove('hide')
    
                }
            }
            else{
                validation(input.name,input.value) 
            }

        })
    })
    function validation(names, value){
        if(regex[names].test(value)){
            valueRegex[names]==true
            for (let i = 0; i < parrafo.length; i++) {
                if (parrafo[i].getAttribute('name')==names) {
                    parrafo[i].classList.add('hide')
                }
                
            }
        }
        else{
            for (let i = 0; i < parrafo.length; i++) {
                if (parrafo[i].getAttribute('name')==names) {
                    parrafo[i].classList.remove('hide')
                }
                
            }

        }

    }
}
export const valueRegex = {
    nombre:false,
    email:false,
    direccion:false,
    password:false,
    repetir:false,
}