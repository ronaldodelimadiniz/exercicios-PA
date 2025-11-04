//Crie um array pedidos com 3 objetos:

//produto
//quantidade
//valorUnitário
//Calcule e mostre o valor total de cada pedido (quantidade × valorUnitário).

let pedidos = [
  { produto: "Notebook", quantidade: 2, valorUnitario: 4500 },
  { produto: "Mouse", quantidade: 5, valorUnitario: 85 },
  { produto: "Teclado", quantidade: 3, valorUnitario: 180 }
];

// Calcula e mostra o valor total de cada pedido
console.log("Valores totais dos pedidos: ");
for (let i = 0; i < pedidos.length; i++) {
  let total = pedidos[i].quantidade * pedidos[i].valorUnitario;
  console.log(`${pedidos[i].produto}: R$ ${total.toFixed(2)}`);
}