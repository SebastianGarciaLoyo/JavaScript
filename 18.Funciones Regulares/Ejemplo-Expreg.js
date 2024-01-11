const names  = ["pedro", "Sara", "Miriam", "Nestor", "Adrian", "Sandro"]

names.forEach(function(name){
    const firstLetter = name.at(0).toLowerCase();
    const lastLetter  =name.at(-1).toLowerCase();

    if ((firstLetter === "p" || firstLetter ===  "s") && (lastLetter === "0" || lastLetter === "a")){
        console.log(`El nombre ${name} cumple las restricciones.`)
    }
});

//Comprobacion usando expresiones regulares
names.forEach(function(name){
    const regex = /^(p|s).+(o|a)$/i;

    if (regex.test(name)){
        console.log(`El nombre ${name} cumple las restricciones`)
    }
});
    

    
