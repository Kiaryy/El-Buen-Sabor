

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
    email: /^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov\.ar)$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
    repetir: function(value) {
        return value === document.querySelector('input[name="password"]').value;
    }
};

const parrafo = document.querySelectorAll('.warning');
const inputs = document.querySelectorAll('#sign-up input, #button-sign-up, #login input, #button-login');

const valueRegex = {
    email: false,
    password: false,
    repetir: false,
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

    // Validar usando la expresión regular
    if (names === 'repetir') {
        valueRegex[names] = regex.repetir(value);
    } else {
        valueRegex[names] = regex[names].test(value);
    }

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