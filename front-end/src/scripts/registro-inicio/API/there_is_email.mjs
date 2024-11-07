export async function there_is_email(email){
    try{
        const response=await fetch('http://localhost:8080/usuarios/findAll',
            {
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