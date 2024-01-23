function agregar(){
    const div = document.querySelector("#regis")
    const p = document.createElement("form")
    p.innerHTML = `
                <br>
                <div class="formu">
                <h2>Registro</h2>
                <p>Usuario: <input type="text"></p>
                <p>Cedula: <input type="text"></p>
                <p>Contraseña: <input type="password"></p>
                <button>Registrarse</button>
                </div>
                `
    div.append(p)
}

function tiendita(){
    const div = document.querySelector("#test")
    const p = document.createElement("table")
    p.innerHTML = `
                <br>
                <div id="shop">
                <button onclick="cerrar()">Cerrar</button>
                <h2>Perfumes</h2>
                <hr>
                <h2>Perfume 1</h2>
                <p id="nombre" value="name">Nombre: Perfume A</p>
                <p id="marca">Marca: Brand X</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 2</h2>
                <p>Nombre: Perfume B</p>
                <p>Marca: Brand Y</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 3</h2>
                <p>Nombre: Perfume C</p>
                <p>Marca: Brand Z</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 4</h2>
                <p>Nombre: Perfume D</p>
                <p>Marca: Brand X</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 5</h2>
                <p>Nombre: Perfume E</p>
                <p>Marca: Brand Y</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 6</h2>
                <p>Nombre: Perfume F</p>
                <p>Marca: Brand Z</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 7</h2>
                <p>Nombre: Perfume G</p>
                <p>Marca: Brand X</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 8</h2>
                <p>Nombre: Perfume H</p>
                <p>Marca: Brand Y</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 9</h2>
                <p>Nombre: Perfume I</p>
                <p>Marca: Brand X</p>
                <button onclick="compra()">Comprar</button>
                <hr>
                <h2>Perfume 10</h2>
                <p>Nombre: Perfume J</p>
                <p>Marca: Brand X</p>
                <button onclick="compra()">Comprar</button>
                </div>
                `
    div.append(p)
}

function compra(){
    const div = document.querySelector("#factura")
    const p = document.createElement("table")
    const name = document.querySelector("#nombre").value
    const marca = document.querySelector("#marca").value
    p.innerHTML = `
                   <h2>Factura</h2>
                   <hr>
                   <h2>Productos</h2>
                   <p>Nombre: ${name}</p>
                   <p>Marca: ${marca}</p>
                   <hr>`
    div.append(p)
}

function cerrar(){
    const div  = document.querySelector("#test")
    const text = document.querySelector("#shop")
    text.innerHTML = ""
    div.insertBefore(text, null)
}

