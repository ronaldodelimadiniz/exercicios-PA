//Mostre os primeiros N termos da sequência de Fibonacci. (1, 1, 2, 3, 5, 8...)

// Solicita a quantidade de termos
let input = require('readline-sync')
let n = input.questionInt("Digite quantos termos da sequência de Fibonacci deseja ver:");

let termo1 = 1;
let termo2 = 1;
let contador = 1;
let resultado = "Sequência de Fibonacci:\n";

// Laço while para gerar os termos
while (contador <= n) {
    resultado += termo1 + " ";

    // Calcula o próximo termo
    let proximo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximo;

    contador++;
}

// Exibe os termos
console.log(resultado);

/* Utilizado o comando while porque não quantas iterações serão realizadas diante do número que o usúario vai digitar.*/

