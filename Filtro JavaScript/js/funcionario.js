
function busca(){
    const div = document.querySelector("#resultado")
    const p = document.createElement("table")
    p.innerHTML = `
                <br>
                <div id="respon">
                <h2>Datos Usuario</h2>
                <p>Nombre:</p>
                <p>ID:</p>
                <p>Contra:</p>
                <p>Compras Restantes para el bono: </p>
                <br>
                <button onclick="cierre()">Cerrar</button>
                </div>
                `
    div.append(p)

}  

function cierre(){
    const div  = document.querySelector("#resultado")
    const text = document.querySelector("#respon")
    text.innerHTML = ""
    div.insertBefore(text, null)
}