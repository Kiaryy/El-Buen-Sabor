

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
                console.log(names + " valor="+ value);
                parrafo[i].classList.remove('hide'); // Mostrar si no es válido
            }
        }
    }
}
//------------------------------------AGREGAR USUARIO----------------------------
button_sign_up.addEventListener('click',async()=>{

    // new_user.cards.push(Number("14"))
    // new_user.pedido.push("222")
    
    // new_user.email="otsuguariquelme@gmail.com"
    
    // // Recorre los input para verificar bien los datos
    // inputs.forEach(input => {
        //     if (input.name!="login_password" && input.name!="login_email") {
            
        //         validation(input.name,input.value)
        //         if(input.name in new_user && valueRegex[input.name]){
            //             if (input.name=="addresses") {
                //                 new_user.addresses.push(input.value)
                //             }else if (input.name=="phone_number") {
                    //                 new_user.phoneNumber=Number(input.value)
                    
                    //             }else{
                        
                    //                 new_user[input.name]=input.value
                    //             }
                    //         }
                    //     }
                    
                    // });
                    // console.log(new_user);
                    
                    // // Validar si todos los elementos son verdaderos excepto login_password
                    // const allValidExceptLogin = Object.keys(valueRegex).every(key => 
                        //     key === 'login_password' || key === 'login_email'|| valueRegex[key]
    // );
    // console.log(valueRegex);
    
    // if (allValidExceptLogin) {
        const new_user={
            name: "Armando Esteban Quito",
            phoneNumber : 123456789,
            adresses: ["Calle Falsa 1234", "Calle Verdadera 4321"],
            cards: [123456, 123568],
            mail: "Armando.Quito@gmail.com",
            passWord:"123456789",
          
        }
        
    const add = 'https://bsapi-latest.onrender.com/usuarios/add';
    
    
    fetch(add,{
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
            }else{
                
                alert("Usuario registrado con exito");
                section_login.classList.remove('hide')
                section_sign_up.classList.add('hide')
            }
            // Convertir la respuesta a JSON
            return response.json();
        })
        .catch(error => {
            // Manejar errores
            console.error('Hubo un problema con la solicitud:', error);
        });

        
    // }else{
    //     console.log("no todo");
        
    // }
    
})
