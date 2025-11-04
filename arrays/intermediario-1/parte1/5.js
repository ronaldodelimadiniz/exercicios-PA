//Crie um array com 5 números. Mostrar o maior e o menor número contido no array.

let numeros = [12, 7, 25, 3, 18];

// Encontra o maior e o menor número usando Math
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

// Exibe os resultados
console.log("Números: ", numeros);
console.log("Maior número: ", maior);
console.log("Menor número: ", menor);