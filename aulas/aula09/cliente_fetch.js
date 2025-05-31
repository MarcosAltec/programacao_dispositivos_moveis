const url = "http://localhost:3000/tarefas"

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Deu ruim!", error.message));

// fetch(`${url}/1a2b`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Deu ruim!", error.message));

// fetch(url, {
//     "method": "POST",
//     "body": JSON.stringify({ "nome": "Praticar React Native", "concluida": false })
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Deu ruim!", error.message));

// fetch(`${url}/e15b`, {
//     "method": "PUT",
//     "body": JSON.stringify({ "nome": "Revisar aaa React", "concluida": true })
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Deu ruim!", error.message));

fetch(`${url}/8854`, { "method": "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Deu ruim!", error.message));