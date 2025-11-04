//Crie uma função totalCompraque receba um array de pedidos, onde cada pedido tem:

//produto
//valorUnitario
//A função deve retornar o valor total da compra.

function totalCompra(pedidos) {
    let total = 0;

    for (let i = 0; i < pedidos.length; i++) {
        total += pedidos[i].valorUnitario;
    }

    return total;
}

// Exemplo de uso:
let listaPedidos = [
    { produto: "Mouse", valorUnitario: 85.50 },
    { produto: "Teclado", valorUnitario: 180.00 },
    { produto: "Monitor", valorUnitario: 950.00 },
    { produto: "Cabo HDMI", valorUnitario: 45.90 },
    { produto: "Headset", valorUnitario: 210.00 }
];

let total = totalCompra(listaPedidos);

console.log("💰 Valor total da compra: R$ " + total.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));