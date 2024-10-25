
export function validation(names, value,parrafo) {
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

export const valueRegex = {
    name:false,
    phone_number:false,
    addresses:false,
    login_email:false,
    sign_up_email:false,
    passWord: false,
    repeat_password: false,
    login_password: false,
};
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