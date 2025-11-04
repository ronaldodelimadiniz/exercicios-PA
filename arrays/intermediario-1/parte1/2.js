//Faça um array com 10 números. Conte quantos números pares existem nesse array.

let numeros = [3, 8, 12, 5, 7, 10, 4, 9, 6, 2];

// Variável para contar os números pares
let pares = 0;

// Percorre o array
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) { // verifica se é par
    pares++;
  }
}

// Exibe o resultado
console.log("Array: ", numeros);
console.log("Quantidade de números pares: ", pares);