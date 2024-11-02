export const last_id=(data)=>{
    const lastItem = data[data.length - 1];
    let lastIdReturn = lastItem ? lastItem.platoId : null;
    return lastIdReturn
   
} 
