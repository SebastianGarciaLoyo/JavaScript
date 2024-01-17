import { controlador } from "../controlador/controller.js";

const form =  document.querySelector(".formu")
form.addEventListener("click", (e) =>{
    e.preventDefault();
    controlador(form, e, "usuarios")
})