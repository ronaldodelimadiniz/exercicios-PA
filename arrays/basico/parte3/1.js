//Faça um programa que receba um array de números e mostre a soma de todos.

let numeros = [5, 11, 15, 55, 25];

// Variável para armazenar a soma
let soma = 0;

// Percorre o array e soma todos os números
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

// Exibe o resultado
console.log("Array: ", numeros);
console.log("Soma de todos os números: ", soma);