

// FUNCION PARA OCULTAR Y MOSTRAR EL MENU DE LOGIN Y REGISTER

    const btn_sign_up = document.querySelector('#link-sign-up');
    const btn_login = document.querySelector('#link-login');
    const section_login = document.querySelector('#section-login');
    const section_sign_up = document.querySelector('#section-sign-up');
    const parrafo = document.querySelectorAll('.warning');
    const inputs = document.querySelectorAll('input');
    const button_login=document.getElementById('button-login')
    const button_sign_up=document.getElementById('button-sign-up')
    const button_profile=document.getElementById('profile')
    

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
    passWord: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
    login_password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
    // login_password: /^\d{2,15}$/,
    repeat_password: function(value) {
        return value === document.querySelector('input[name="passWord"]').value;
    }
};


const valueRegex = {
    name:false,
    phone_number:false,
    addresses:false,
    login_email:false,
    sign_up_email:false,
    passWord: false,
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
//------------------------------------REGISTRARSE----------------------------

async function there_is_email(email){
    try{
        const response=await fetch('https://bsapi-latest.onrender.com/usuarios/findAll',{
            method:'GET'
        });
        const data =  await response.json();
        for (let user of data) {
           if (user.mail==email) {
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

button_sign_up.addEventListener('click',async()=>{
    const new_user={
        name: "",
        phoneNumber : 0,
        addresses: [],
        cards: [],
        email: "",
        passWord:"",
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
                                    new_user.mail=input.value
                                }
                                else{
                                    new_user[input.name]=input.value
                        
                                }
                            }
                        }
                    
                        });
                
                    
                    // Validar si todos los elementos son verdaderos excepto login_password
                 
    // console.log(valueRegex);
                    const allValidExceptLogin = Object.keys(valueRegex).every(key => 
                            key === 'login_password' || key === 'login_email'|| valueRegex[key]
                            
    );

                
    if (allValidExceptLogin) {
        const emailExists=await there_is_email(new_user.mail)
        if (emailExists) {
            
        const add = 'https://bsapi-latest.onrender.com/usuarios/add';
        
        
        fetch(add, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Especificamos que los datos están en formato JSON
            },
        
         
            
            body: JSON.stringify(new_user) // Convertimos los datos a formato JSON
        })
        .then(response => {
            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            
            // Verificar si el tipo de contenido es JSON
            const contentType = response.headers.get('Content-Type');
            
            if (contentType && contentType.includes('application/json')) {
                return response.json(); // Leer como JSON si es de tipo JSON
            } else {
                return response.text(); // Leer como texto si no es JSON
            }
        })
        .then(data => {
        
            // Mostrar mensaje de éxito
            section_login.classList.remove('hide');
            section_sign_up.classList.add('hide');
            alert("Usuario registrado con éxito");
        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud:', error);
            alert("No se pudo registrar el usuario");
        });
        
            
        }else{
            alert("Ya existe usuario con ese email, use otro");
        }
        
}else{
    alert("Faltan ingresar datos");
   
        
   

}
    
})
//------------------------------------INICIAR SESION------------------------------------------------

button_login.addEventListener('click',async()=>{
    const validate_user={
        login_email: "",
        login_password:"",
    }
    inputs.forEach(input => {
        if (input.name=="login_password" || input.name=="login_email") {
            validation(input.name,input.value)
            if(valueRegex[input.name]){
                validate_user[input.name]=input.value
                        }
                    }
                
                    });
            
                // Valida solo los datos de email y contraseña
                const allValidExceptLogin = ['login_password', 'login_email'].every(key => valueRegex[key]);
        let profile=false
        if (allValidExceptLogin) {
            // Verifica si la base de datos local no está cread
            
            if (!localStorage.getItem('Users')) {

                const there_is_user= await user_exists(validate_user.login_email,validate_user.login_password)
           
                
                if (there_is_user) {
                   profile=true
                }else{
                    alert("Email o Contraseña mal colocados");
                }
                
            }else{
                let users = JSON.parse(localStorage.getItem('Users')) ||[];
                for (let user of users) {
                    if (user.email==validate_user.login_email) {
                        if (user.password==validate_user.login_password) {
                        
                        profile=true
                            break
                    }
                    }else if ( await user_exists(validate_user.login_email,validate_user.login_password)) {
                        profile=true
                    }
                    
                }
               
            }
             // Si el login fue exitoso, guardar el estado en localStorage
        if (profile) {
            button_profile.innerHTML='Mi perfil'
            button_profile.classList.remove('hide')
                // Guardar estado en localStorage
            window.location.href = 'menu.html'; // Redirigir a menu.html
            alert("Iniciado correctamente");
            }else{
                alert("Email o Contraseña mal colocados");
        }
            
            
        }else{
            alert("Faltan ingresar datos");
        }
        
        
        
    })
    let user_save={
        name: "",
        phoneNumber : 0,
        addresses: [],
        cards: [],
        mail: "",
        passWord:"",
        pedido:[],
        state:false,
    };
    
    async function user_exists(email,password){
       
        
        try{
            const response=await fetch('https://bsapi-latest.onrender.com/usuarios/findAll',{
                method:'GET'
            });
            const data =  await response.json();
            
            console.log(email);
            console.log(password);
            
            for (let user of data) {
                if (user.mail==email && user.passWord==password) {
                user_save.name=user.name
                user_save.phoneNumber=user.phoneNumber
                user_save.addresses.push(user.addresses)
                user_save.mail=user.mail
                user_save.passWord=user.passWord
                user_save.state=true
                if (localStorage.getItem('Users')) {
                    let users = JSON.parse(localStorage.getItem('Users')) || [];
                    users.push(user_save)
                    localStorage.setItem('Users', JSON.stringify([user_save]));
                }else{
                    
                    localStorage.setItem('Users', JSON.stringify([user_save]));
                }
                
                return true
           }
            
        }
       return false
        
    } 
    catch(error){
            // Manejar errores
            console.error('Hubo un problema con la solicitud:', error);
    }
}

// const handleLogInState = (name = "",   phoneNumber = 0, addresses = [],cards= [], email = "",password="",pedido=[], state = false) => {
//     logInState.state = state
//     logInState.user.firstName = firstName
//     logInState.user.lastName = lastName
//     logInState.user.username = username
//     logInState.user.email = email
//     logInState.user.image = image
//     localStorage.setItem('stateLogin', JSON.stringify(logInState))
// }