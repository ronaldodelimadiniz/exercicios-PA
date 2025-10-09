//Peça uma palavra e conte quantas vogais ela tem.

// Solicita uma palavra ao usuário
let input = require('readline-sync')
let palavra = input.questionInt("Digite uma palavra:");
let i = 0;
let contadorVogais = 0;

// Converte para minúsculas para facilitar a comparação
palavra = palavra.toLowerCase();

// Laço while para percorrer cada letra
while (i < palavra.length) {
    let letra = palavra[i];

    // Verifica se a letra é uma vogal
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVogais++;
    }

    i++;
}

// Exibe o resultado
console.log("A palavra '" + palavra + "' tem " + contadorVogais + " vogais.");

/* Utilizado o comando while porque não sei o tamanho da palavra que o usúario vai digitar.*/
