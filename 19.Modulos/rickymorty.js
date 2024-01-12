async function mostrarpersonaje(){
    const main = document.querySelector("main")
    for (let i = 1; i <= 6; i++ ){
        try{
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${i}`) 
        const datos = await respuesta.json();
        const {name, status, image} = datos

        const aparecer = `
            <div>
            <img src="${image}"
            <br>
            <h2>${name}</h20>
            <p>${status}</p>            
            </div>
        `;
        main.innerHTML += aparecer
        }catch (error){
            console.error('Hubo un problema al obtener los datos: ')
        }
    }
    
}

mostrarpersonaje()