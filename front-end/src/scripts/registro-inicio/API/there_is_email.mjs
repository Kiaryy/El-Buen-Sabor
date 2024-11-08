import { last_id } from "../../admin/lastId.mjs";

export async function there_is_email(email){
    try{

        const response=await fetch('https://proactive-intuition-production-15d4.up.railway.app/usuarios/findAll',
            {
            method:'GET'
        });
        const data =  await response.json();
       
     
        for (let user of data) {
            console.log(user.id);
            
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