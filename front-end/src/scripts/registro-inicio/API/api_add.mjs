export const api_add =async(email,password)=>{
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
        try{
            const response=await fetch('http://localhost:8080/usuarios/findAll',{
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