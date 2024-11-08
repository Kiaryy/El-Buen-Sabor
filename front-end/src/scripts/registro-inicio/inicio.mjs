import {valueRegex} from "./validation/valieRegistro.mjs"
import { api_add} from "./API/api_add.mjs";
import { validation } from "./validation/valieRegistro.mjs";
const button_profile=document.querySelector('.profile')
//------------------------------------INICIAR SESION------------------------------------------------
export const inicio=(inputs,validate_user,parrafo)=>{
    inputs.forEach(input => {
        if (input.name=="login_password" || input.name=="login_email") {
            validation(input.name,input.value,parrafo)
            if(valueRegex[input.name]){
                validate_user[input.name]=input.value
                        }
                    }
                
                    });
}

export const vali_inicio=async(validate_user)=>{
        const allValidExceptLogin = ['login_password', 'login_email'].every(key => valueRegex[key]);
        let profile=false  
        
        if (allValidExceptLogin) {

            if (!localStorage.getItem('Users')) {
                const there_is_user= await api_add(validate_user.login_email,validate_user.login_password)
                if (there_is_user) {
                   profile=true
                }else{
                    alert("Email o Contraseña mal colocados");
                }
            }else{
                let users = JSON.parse(localStorage.getItem('Users')) ||[];
                for (let user of users) {
                   
                    
                    if (user.mail==validate_user.login_email) {
                        if (user.passWord==validate_user.login_password) {
                     
                        
                        profile=true
                        break
                    }
                    }else if ( await api_add(validate_user.login_email,validate_user.login_password)) {
                        profile=true
                    }
                    
                }
               
            }
             
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
        
}
