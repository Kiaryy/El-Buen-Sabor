
import { api_editar } from "../api-editar/api-editar.mjs";

export const editar_bebidas = async(valores,id) => {
    console.log(valores);
    console.log(id+id);
    const valor=id;

    const actualizar_bebida = {
            id:valor,
            nombre:valores[0],
            descripcion:valores[1],
            precio:Number(valores[2]),
            stock:Number(valores[3]),

    };
console.log( actualizar_bebida.id);

    const url = `http://localhost:8080/bebidas/${id}`;
    // const url = 'https://bsapi-latest.onrender.com/employees/add';
    if(await api_editar(url,actualizar_bebida)){

        location.reload(); // 
    }




}
