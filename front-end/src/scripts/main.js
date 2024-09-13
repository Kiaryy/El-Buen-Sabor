const $ = selector => document.querySelector(selector);
const º = selector => document.querySelectorAll(selector);

const contenedor = $("#popular");

// Agrega un event listener al contenedor que escucha clicks en elementos con clase .button-to-cart
contenedor.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("button-to-cart")) {
        console.log("hola");
        agregar();
    }
});

const agregar = async () => {
    contenedor.innerHTML += `
        <div class="product-pop">
            <img src="IMAGENES BUEN SABOR/MAIN/hamburguesaClasica.png" alt="">
            <div class="name-food">
                <h5><center>Hamburguesa<br>Clasica</center></h5>
            </div>
            <div class="add-car">
                <div class="description-pop">
                    <div id="time">
                        <img src="IMAGENES BUEN SABOR/MAIN/reloj.png" alt="" id="reloj">
                        <p>15 mins.</p>
                    </div>
                    <img src="IMAGENES BUEN SABOR/MAIN/estrellas.png" alt="">
                    <br>
                </div>
                <button class="button-to-cart">IR AL <br> PRODUCTO</button>
            </div>
        </div>
    `;
}