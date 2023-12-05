//creara conjuntos
let letras = new set()

letras.add("a")
letras.add("b")
letras.add("c")

//Agregar elementos
console.log(letras)

//Borrar elementos
console.log(letras.delete("a"))
console.log(letras.delete("y"))
console.log(letras)

// si el elemento existe dentro
console.log(letras.has("y"))
console.log(letras.has("c"))

//recorrido cpm foreach
letras.forEach(l => console.log(l))

//Recorrido con for of
console.log("")
for (const l of letras.values()){
    console.log(l)
}

//
console.log("Tamaño del conjunto" + letras.size)
    