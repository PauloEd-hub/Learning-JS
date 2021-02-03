// Novo recurso do ES2015




const pessoa = {
    nome: 'Ana',
    idaade: 5,
    endereco: {
        logradouro: 'Rua ABC Paulista',
        numero: 100
    }
}

const { nome, idade} = pessoa
conasole.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)


const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)


const{endereco: {logradouro, numero,cep}} = pessoa
console.log(logradouro, numero, cep)