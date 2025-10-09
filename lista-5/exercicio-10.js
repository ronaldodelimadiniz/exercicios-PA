//Calcule o fatorial de um número informado pelo usuário. Exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

// Solicita um número ao usuário
let input = require('readline-sync')
let numero = input.questionInt("Digite um número para calcular o fatorial:");
let fatorial = 1;
let contador = numero;

// Laço while para calcular o fatorial
while (contador >= 1) {
    fatorial *= contador;
    contador--;
}

// Exibe o resultado
console.log(numero + "! = " + fatorial);

/* Utilizado o comando while porque não quantas iterações serão realizadas diante do número que o usúario vai digitar.*/
