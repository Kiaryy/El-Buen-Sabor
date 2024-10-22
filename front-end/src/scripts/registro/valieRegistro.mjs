

// FUNCION PARA OCULTAR Y MOSTRAR EL MENU DE LOGIN Y REGISTER

    const btn_sign_up = document.querySelector('#link-sign-up');
    const btn_login = document.querySelector('#link-login');
    const section_login = document.querySelector('#section-login');
    const section_sign_up = document.querySelector('#section-sign-up');

    btn_login.addEventListener('click',()=>{
        section_login.classList.add('hide')
        section_sign_up.classList.remove('hide')
    })

    btn_sign_up.addEventListener('click',()=>{
        section_sign_up.classList.add('hide')
        section_login.classList.remove('hide')
       
    })

const regex = {
    name:/^[a-zA-Z]{3,30}$/,
    phone_number: /^\d{10,15}$/,
    addresses:/^[a-zA-Z0-9 ]{5,40}$/,
    login_email: /^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov\.ar)$/,
    sign_up_email:/^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov\.ar)$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
    login_password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
    repeat_password: function(value) {
        return value === document.querySelector('input[name="password"]').value;
    }
};

const parrafo = document.querySelectorAll('.warning');
const inputs = document.querySelectorAll('input');
const button_login=document.getElementById('button-login')
const button_sign_up=document.getElementById('button-sign-up')

const valueRegex = {
    name:false,
    phone_number:false,
    addresses:false,
    login_email:false,
    sign_up_email:false,
    password: false,
    repeat_password: false,
    login_password: false,
};

inputs.forEach(input => {
  
        // Cada vez que se ingrese una tecla
       input.addEventListener('input', () => {
       validation(input.name, input.value);
    });
    
    // Cada vez que deje de hacer foco
       input.addEventListener('blur', () => {
      
       
       validation(input.name, input.value);
    });
    
   
    });

function validation(names, value) {
    if (names in regex) {
        if (names === 'repeat_password') {
            valueRegex[names] = regex.repeat_password(value);
        } else {
            valueRegex[names] = regex[names].test(value);
        }
    }
    // Validar usando la expresión regular+
 
    // Mostrar u ocultar mensajes de advertencia
    for (let i = 0; i < parrafo.length; i++) {

        if (parrafo[i].getAttribute('name') === names) {
            if (valueRegex[names]) {
                parrafo[i].classList.add('hide'); // Ocultar si es válido
                
            } else {
                
                parrafo[i].classList.remove('hide'); // Mostrar si no es válido
            }
        }
    }
}
//------------------------------------AGREGAR USUARIO----------------------------

button_sign_up.addEventListener('click',async()=>{
    const new_user={
        name: "",
        phoneNumber : 0,
        addresses: [],
        cards: [],
        email: "",
        password:"",
        pedido:[],
      
    }

    // Recorre los input para verificar bien los datos
    inputs.forEach(input => {
            if (input.name!="login_password" && input.name!="login_email" && input.name!="repeat_password") {
                
                
                validation(input.name,input.value)
                if(valueRegex[input.name]){
                        if (input.name=="addresses") {
                                new_user.addresses.push(input.value)
                            }else if (input.name=="phone_number") {
                                    new_user.phoneNumber=Number(input.value)
                    
                                }else if (input.name=="sign_up_email"){
                                    new_user.email=input.value

                                }
                                else{
                                    new_user[input.name]=input.value
                        
                                }
                            }
                        }
                    
                        });
                
                    
                    // Validar si todos los elementos son verdaderos excepto login_password
                    const allValidExceptLogin = Object.keys(valueRegex).every(key => 
                            key === 'login_password' || key === 'login_email'|| valueRegex[key]
                            
    );
    // console.log(valueRegex);
    

    async function there_is_email(email){
       
        try{
            const response=await fetch('https://bsapi-latest.onrender.com/usuarios/findAll',{
                method:'GET'
            });
            const data =  await response.json();
          
            
            for (let user of data) {
               if (user.email=email) {
                    return false
               }
                
            }
           return true
            
        } 
        catch(error){
                // Manejar errores
                console.error('Hubo un problema con la solicitud:', error);
        }
       
        

    }
    if (allValidExceptLogin) {
        const emailExists=await there_is_email(new_user.email)
        if (emailExists) {
            
        // const add = 'https://bsapi-latest.onrender.com/usuarios/add';
        
        
        // fetch(add, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json' // Especificamos que los datos están en formato JSON
        //     },
        //     body: JSON.stringify(new_user) // Convertimos los datos a formato JSON
        // })
        // .then(response => {
        //     // Verificar si la respuesta fue exitosa
        //     if (!response.ok) {
        //         throw new Error('Error en la solicitud: ' + response.status);
        //     }
            
        //     // Verificar si el tipo de contenido es JSON
        //     const contentType = response.headers.get('Content-Type');
            
        //     if (contentType && contentType.includes('application/json')) {
        //         return response.json(); // Leer como JSON si es de tipo JSON
        //     } else {
        //         return response.text(); // Leer como texto si no es JSON
        //     }
        // })
        // .then(data => {
        //     if (typeof data === 'object') {
        //         console.log('Respuesta JSON:', data); // Manejo de datos JSON
        //     } else {
        //         console.log('Respuesta texto:', data); // Manejo de respuesta en texto
        //     }
        
        //     // Mostrar mensaje de éxito
        //     alert("Usuario registrado con éxito");
        //     section_login.classList.remove('hide');
        //     section_sign_up.classList.add('hide');
        // })
        // .catch(error => {
        //     // Manejar errores
        //     console.error('Hubo un problema con la solicitud:', error);
        //     alert("No se pudo registrar el usuario");
        // });
        
            
        }else{
            alert("Ya existe usuario con ese email, use otro");
        }
        
}else{
    alert("Faltan ingresar datos");
   
        
   

}
    
})
