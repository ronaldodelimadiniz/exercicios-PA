//Peça o valor das compras até o cliente digitar 0. No final, mostre o total a pagar.
let input = require('readline-sync')
let total = 0;
let valor = input.questionInt("Digite o valor da compra (0 para finalizar):");

// Laço while para somar os valores
while (valor !== 0) {
    total += valor;
    valor = input.questionInt("Digite o valor da próxima compra (0 para finalizar):");
}

// Exibe o total a pagar
console.log("Total a pagar: R$ " + total.toFixed(2));

/* Utilizado o comando while porque não sei quantas compras o usúario vai digitar.*/