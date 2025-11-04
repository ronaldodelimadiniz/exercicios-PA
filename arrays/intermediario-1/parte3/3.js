//Crie um array pedidos com:

//produto
//quantidade
//valorUnitario
//Calcule o valor total de cada pedido (quantidade × valor unitário) e mostre a soma total da compra.

let pedidos = [
    { produto: "Mouse", quantidade: 2, valorUnitario: 85 },
    { produto: "Teclado", quantidade: 1, valorUnitario: 180 },
    { produto: "Monitor", quantidade: 3, valorUnitario: 900 },
    { produto: "Cabo HDMI", quantidade: 4, valorUnitario: 50 },
    { produto: "Headset", quantidade: 2, valorUnitario: 200 }
];

// Variável para somar o total da compra
let somaTotal = 0;

// Percorre o array e calcula o total de cada pedido
for (let i = 0; i < pedidos.length; i++) {
    let totalPedido = pedidos[i].quantidade * pedidos[i].valorUnitario;
    console.log(`${pedidos[i].produto}: R$ ${totalPedido.toFixed(2)}`);
    somaTotal += totalPedido;
}

// Exibe o valor total da compra
console.log("----------------------------");
console.log(`Valor total da compra: R$ ${somaTotal.toFixed(2)}`);