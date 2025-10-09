//Leia vários números até o usuário digitar 0. Mostre o maior e o menor número digitado.

let input = require('readline-sync')
let numero = input.questionInt("Digite um número (0 para parar):");
let maior = numero;
let menor = numero;

while (numero !== 0) {
    // Atualiza maior e menor se necessário
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }

    // Lê o próximo número
    numero = input.questionInt("Digite outro número (0 para parar):");
}

// Exibe os resultados
console.log("Maior número digitado: " + maior + "\nMenor número digitado: " + menor);

/* Utilizado o comando while porque não sei quantos números o usúario vai digitar.*/