import { validation } from "./validation/valieRegistro.mjs";
import { registro } from "./registro.mjs";
import { vali_registro } from "./registro.mjs";
import { inicio } from "./inicio.mjs";
import { vali_inicio } from "./inicio.mjs";
const btn_sign_up = document.querySelector('#link-sign-up');
const btn_login = document.querySelector('#link-login');
const section_login = document.querySelector('#section-login');
const section_sign_up = document.querySelector('#section-sign-up');
const parrafo = document.querySelectorAll('.warning');
const inputs = document.querySelectorAll('input');
const button_login=document.getElementById('button-login')
const button_sign_up=document.getElementById('button-sign-up')



//-----------------------IMPUTS DEL REGISTRO Y INICIO SESION-----------------------
inputs.forEach(input => {

    // Cada vez que se ingrese una tecla
    input.addEventListener('input', () => {
        validation(input.name, input.value,parrafo);
     });
     
     // Cada vez que deje de hacer foco
        input.addEventListener('blur', () => {
       
        
        validation(input.name, input.value,parrafo);
     });
});
//-----------------------CUANDO SE HAGA CLICK EN EL BOTON DE REGISTRARSE-----------------------
button_sign_up.addEventListener('click',()=>{
    const new_user={
        name: "",
        phoneNumber : 0,
        addresses: [],
        cards: [],
        email: "",
        passWord:"",
        pedido:[],
    }
    registro(inputs,new_user,parrafo)
    vali_registro(section_login,section_sign_up,new_user)
    
})

//-----------------------CUANDO SE HAGA CLICK EN EL BOTON DE INICIAR SESION-----------------------
button_login.addEventListener(`click`,()=>{
    const validate_user={
        login_email: "",
        login_password:"",
    }
    inicio(inputs,validate_user,parrafo)
    vali_inicio(validate_user)

})


//--------------------CAMBIAR ENTRE LOGIN Y SIGN UP----------------------
btn_login.addEventListener('click',()=>{
    section_login.classList.add('hide')
    section_sign_up.classList.remove('hide')
})

btn_sign_up.addEventListener('click',()=>{
    section_sign_up.classList.add('hide')
    section_login.classList.remove('hide')
   
})