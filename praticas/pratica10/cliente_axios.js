import axios from "axios";
const url = "http://localhost:3000/contatos"

// axios.get(url)
// .then(response => console.log(response.data))
// .catch(error => console.log('Erro: ', error));

// axios.get(`${url}/3c4d`)
// .then(response => console.log(response.data))
// .catch(error => console.log('Erro: ', error));

// axios.post(`${url}`, {
//   nome: 'Pedro',
//   telefone: '95555-5555'
// })
//   .then(response => console.log('Contato adicionado:', response.data))
//   .catch(error => console.error('Erro:', error));

// axios.put(`${url}/3c4d`, {
//   nome: 'Maria Madalena',
//   telefone: '99999-9999'
// })
//   .then(response => console.log('Contato atualizado:', response.data))
//   .catch(error => console.error('Erro:', error));

axios.delete(`${url}/3c4d`)
.then(response => console.log(response.data))
.catch(error => console.error('Erro:', error));