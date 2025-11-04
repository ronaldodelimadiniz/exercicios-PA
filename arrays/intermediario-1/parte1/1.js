//Crie um array com 8 números inteiros. Faça um laço que mostre apenas os números maiores que 5

let numeros = [2, 7, 4, 9, 1, 6, 10, 3];

// Mostra apenas os números maiores que 5
console.log("Números maiores que 5: ");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 5) {
    console.log(numeros[i]);
  }
}