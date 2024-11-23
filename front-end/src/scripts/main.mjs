
const button_profile=document.querySelector('#profile')
const button_cerrar_sesion=document.querySelector('#cerrar_sesion')



window.onload = function () { 
    if (localStorage.getItem("Users") !== null) {
        console.log("La base 'Users' existe en localStorage.");
        let users = JSON.parse(localStorage.getItem('Users')) || [];
        var index = users.findIndex(u => u.state == true);
        console.log(index);
        
        if (index!=-1) {
            button_profile.innerHTML = 'Perfil';
            
            button_profile.addEventListener("click", function(event) {
                event.preventDefault();
                const menu = document.getElementById("menu-hamburguesa");
                menu.classList.toggle("menu-hidden");
              });
        }
    } else {
        console.log("sdad");
        
        button_profile.innerHTML = 'Registro';
        console.log("La base 'Users' no existe en localStorage.");
    }
}
button_cerrar_sesion.addEventListener('click',()=>{
    let users = JSON.parse(localStorage.getItem('Users')) || [];
    var index = users.findIndex(u => u.state == true);
    users[index].state=false
    localStorage.setItem('Users', JSON.stringify([users[index]]));
    alert("Se cerro la sesion correctamente")
    location.reload()

})