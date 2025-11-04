//Crie uma função contarPares que recebe um array de números e conte quantos são pares.

/*function contarPares(numeros) {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

let lista = [2, 7, 10, 13, 20, 33, 42];
let resultado = contarPares(lista);

console.log("Quantidade de números pares: " + resultado);*/


let input = require('readline-sync');

// Função que conta quantos números pares existem no array
function contarPares(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

// Entrada de dados do usuário
let numeros = [];
for (let i = 0; i < 5; i++) {
    let num = input.questionInt(`Digite o ${i + 1}º número: `);
    numeros.push(num);
}

// Chama a função e mostra o resultado
let qtdPares = contarPares(numeros);
console.log(`\nVocê digitou ${qtdPares} números pares.`);