

    const $ = selector => document.querySelector(selector);
    const button_profile=document.getElementById('profile')
    window.onload = async function () {
        const profile = localStorage.getItem('profile');
            if (profile === 'true') {
                button_profile
                if (button_profile) {
                    button_profile.innerHTML = 'Perfil';
                    
                }
            }}
    //     const º = selector => document.querySelectorAll(selector);

// const contenedor = $("#popular");

// window.onload =async function () {
 
//     try{
//         const response = await fetch('https://bsapi-latest.onrender.com/platos/findAll'); // Reemplaza con la URL de tu API
//         const data = await response.json();
//           // Almacenar datos en localStorage
//         localStorage.setItem('menuData', JSON.stringify(data));
                
//           // Redirigir a la página del menú
    
//     }catch (error) {
//         console.error('Error al llamar a la API:', error);
//     }
    
// } 
// const $btn_menu=$('#menu')
// $btn_menu.addEventListener('click',()=>{
    
//     prueba();
// })
// const url = 'https://demoapi-latest.onrender.com/platos/findAll';
// // Agrega un event listener al contenedor que escucha clicks en elementos con clase .button-to-cart
// fetch(url)
// .then(response => {
//     // Verificar si la respuesta fue exitos
//     // Convertir la respuesta a JSON
//     return response.json();})
//     .then(data => {
        
//         console.log(data);
//     })

    
