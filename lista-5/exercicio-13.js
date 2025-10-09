//Leia vários números até o usuário digitar 0. Mostre:Quantos números foram digitados, A média deles, O maior e o menor valor

let input = require('readline-sync')
let numero = input.questionInt("Digite um número (0 para parar):");
let quantidade = 0;
let soma = 0;
let maior = numero;
let menor = numero;

while (numero !== 0) {
    soma += numero;
    quantidade++;

    // Atualiza maior e menor
    if (quantidade === 1) {
        maior = numero;
        menor = numero;
    } else {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
    }

    numero = input.questionInt("Digite outro número (0 para parar):");
}

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log(
        "Quantidade de números digitados: " + quantidade +
        "\nMédia: " + media.toFixed(2) +
        "\nMaior número: " + maior +
        "\nMenor número: " + menor
    );
} else {
    console.log("Nenhum número foi digitado.");
}

/* Utilizado o comando while porque não sei quantos números o usúario vai digitar.*/