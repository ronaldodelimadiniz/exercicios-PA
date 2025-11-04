//Faça um array produtos com 4 objetos contendo:

//nome
//preco
//estoque
//Mostre apenas os produtos com estoque acima de 10 unidades.

let produtos = [
  { nome: "Notebook", preco: 4500, estoque: 8 },
  { nome: "Mouse", preco: 85, estoque: 25 },
  { nome: "Teclado", preco: 180, estoque: 12 },
  { nome: "Monitor", preco: 1200, estoque: 6 }
];

// Mostra apenas os produtos com estoque acima de 10 unidades
console.log("Produtos com mais de 10 unidades em estoque: ");
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].estoque > 10) {
    console.log(`${produtos[i].nome} — ${produtos[i].estoque} unidades`);
  }
}