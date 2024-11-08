// FUNCION PARA OCULTAR Y MOSTRAR EL MENU DE LOGIN Y REGISTER
import { valueRegex } from "./validation/valieRegistro.mjs"
import {there_is_email } from "./API/there_is_email.mjs";
import { api_call } from "./API/api_call.mjs";
import { validation } from "./validation/valieRegistro.mjs";

//-------------------------FUNCION PARA ASIGNARLES LOS VALORES CORRESPONDIENTE AL OBJETO---------------------------
export const registro = (inputs, new_user, parrafo) => {
    inputs.forEach(input => {
        if (input.name != "login_password" && input.name != "login_email" && input.name != "repeat_password") {
            validation(input.name, input.value, parrafo)
            if (valueRegex[input.name]) {
                if (input.name == "addresses") {
                    new_user.addresses.push(input.value)
                } else if (input.name == "phone_number") {
                    new_user.phoneNumber = Number(input.value)

                } else if (input.name == "sign_up_email") {
                    new_user.mail = input.value
                }
                else {
                    new_user[input.name] = input.value

                }
            }
        }
    })
}

//-------------------------FUNCION PARA VALIDAR EL REGISTRO---------------------------
export const vali_registro = async (section_login, section_sign_up, new_user) => {
    const allValidExceptLogin = Object.keys(valueRegex).every(key =>
        key === 'login_password' || key === 'login_email' || valueRegex[key]

    );

    //valida si estan bien todos los datos
    if (allValidExceptLogin) {
        //Guarda si existe el gmail o no
        const emailExists = await there_is_email(new_user.mail)
        if (emailExists) {
            
            const add = 'https://proactive-intuition-production-15d4.up.railway.app/usuarios/add';

            api_call(add, section_login, section_sign_up, new_user)
        } else {
            alert("Ya existe usuario con ese email, use otro");
        }
    } else {
        alert("Faltan ingresar datos");
    }
}



