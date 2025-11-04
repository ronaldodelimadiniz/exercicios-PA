//Crie um array com os números de 1 a 10. Mostre apenas os números pares (dica: usar if dentro de um for).

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Números pares de 1 a 10: ");

// Percorre o array
for (let i = 0; i < numeros.length; i++) {
  // Verifica se o número é par
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}