//const btn_pay =document.getElementById('pagar')
//let users = JSON.parse(localStorage.getItem('Users')) || [];
//
//let index = users.findIndex(u => u.state == true);
//
//let user_order={
//    title:"",
//    descriptions: [],
//    price:0,
//}
//
//btn_pay.addEventListener('click',()=>{
//    if (index==-1) {
//        alert("para comprar debe iniciar sesion")
//    }else{
//        const order=document.querySelectorAll('.pedido li')
//        add_order(order,users,index)       
//    }
//    
//})
//
//let order_total=0
//function add_order(cart,user,index) {
//    for (let or of cart) {
//        let partes = or.textContent.split(" ");
//        let name= partes.slice(0, partes.length - 2).join(" ");
//        let cant=parseInt(partes.find(p => p.startsWith("x"))?.slice(1));
//        let total=parseInt(partes.find(p => p.startsWith("$"))?.slice(1));      
//            
//        let ordes={
//            name:name,
//            cant:cant,
//            total:total,
//        }
//        user_order.descriptions.push(ordes)
//        order_total+=total
//
//    }
//    user_order.title="Buen Sabor"
//    user_order.price=order_total
//    user[index].pedido=[user_order]
//    localStorage.setItem('Users', JSON.stringify(users));
//}