function criarProdutos(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProdutos('Notebook', 2199.49))
console.log(criarProdutos('Pc Gamer', 1299.49))