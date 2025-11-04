//Crie uma função filtrarProdutosCaros que receba uma variedade de produtos e retorne apenas os que custam mais de R$100,00.

function filtrarProdutosCaros(produtos) {
    let caros = [];

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco > 100) {
            caros.push(produtos[i]);
        }
    }

    return caros;
}

// Exemplo de uso:
let listaProdutos = [
    { nome: "Mouse", preco: 85 },
    { nome: "Teclado", preco: 180 },
    { nome: "Monitor", preco: 900 },
    { nome: "Cabo HDMI", preco: 45 },
    { nome: "Headset", preco: 200 }
];

let produtosCaros = filtrarProdutosCaros(listaProdutos);

console.log("💰 Produtos com valor acima de R$100,00:");
for (let i = 0; i < produtosCaros.length; i++) {
    console.log(`- ${produtosCaros[i].nome}: R$ ${produtosCaros[i].preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);
}





