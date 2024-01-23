import { get } from "./../models/get.js";



export function controlador(formu,usuarios){
    const URL = "http://localhost:4001/"
    let url = "";

    const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null
    const valor = event.target.value;

    switch(valor){
        case "Buscar":
        url = `${URL}${usuarios}/${datos !== null ? datos.id: ""}`;
        get(url,datos)
    }

}