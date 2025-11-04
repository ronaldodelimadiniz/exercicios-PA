//Crie um array produtoscom 3 objetos contendo:

//nome
//preço
//Depois, mostre o nome e o preço do produto mais caro.

let produtos = [
  { nome: "Notebook", preco: 4500 },
  { nome: "Smartphone", preco: 3500 },
  { nome: "Fone de Ouvido", preco: 200 }
];

// Inicializa o mais caro como o primeiro produto
let maisCaro = produtos[0];

// Percorre o array para encontrar o produto mais caro
for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].preco > maisCaro.preco) {
    maisCaro = produtos[i];
  }
}

// Mostra o nome e o preço do produto mais caro
console.log("Produto mais caro: ");
console.log("Nome:", maisCaro.nome);
console.log("Preço: R$ " + maisCaro.preco.toFixed(2));