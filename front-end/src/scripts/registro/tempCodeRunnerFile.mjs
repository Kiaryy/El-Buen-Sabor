const response=await fetch('https://bsapi-latest.onrender.com/usuarios/findAll',{
    method:'GET'
});
const data =  await response.json();


for (let user of data) {
    console.log(user);}