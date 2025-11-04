//Faça uma função mostrarProduto que recebe um objeto produtocom:

//nome
//preço
//quantidade
//A função deve calcular e mostrar o valor total do estoque (preco × quantidade).

function mostrarProduto(produto) {
    let valorTotal = produto.preco * produto.quantidade;

    console.log("📦 Informações do Produto:");
    console.log(`Nome: ${produto.nome}`);
    console.log(`Preço unitário: R$ ${produto.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);
    console.log(`Quantidade em estoque: ${produto.quantidade}`);
    console.log(`💰 Valor total do estoque: R$ ${valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);
}


let produto1 = {
    nome: "Mouse Gamer",
    preco: 150.75,
    quantidade: 15
};

mostrarProduto(produto1);