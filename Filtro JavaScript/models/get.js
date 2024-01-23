fetch('http://localhost:4001/usuarios'),{
    method: "GET",
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
}

.then((response) => response.json)
.then((json) => console.log(json))