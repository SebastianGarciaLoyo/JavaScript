fetch('http://localhost:3000/trainers/2',{
    method: "GET",
    headers: {
    'Content-type': "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json)
    .then((json) => console.log(json));
   

