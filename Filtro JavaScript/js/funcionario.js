import { controlador } from "../controllers/controlador.js";
export { get } from "../models/get.js"


document.getElementById("buscar").addEventListener("submit",function(event){
    event.preventDefault();

    fetch('http://localhost:4001/usuarios')
    .then(response => response.json())
    .then(usuariosregistrados => {
        const encontrar = usuariosregistrados.find(usuario => usuario.id, usuario.pass, usuarios.nombre)
        if (encontrar == true){
            function busca(){
                const div = document.querySelector("#resultado")
                const p = document.createElement("table")
                p.innerHTML = `
                            <br>
                            <div id="respon">
                            <h2>Datos Usuario</h2>
                            <p>Nombre:${nombre} </p>
                            <p>ID: ${id}</p>
                            <p>Contra ${pass}</p>
                            <p>Compras Restantes para el bono: </p>
                            </div>
                            `
                div.append(p)
            
            }  
        }
        
    })
    
})
