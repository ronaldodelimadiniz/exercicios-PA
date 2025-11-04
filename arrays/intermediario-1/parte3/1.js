//Crie um array de 10 números e mostre a soma dos números pares e a soma dos números ímpares separadamente.

let numeros = [3, 8, 12, 5, 7, 10, 4, 9, 2, 15];

// Variáveis para armazenar as somas
let somaPares = 0;
let somaImpares = 0;

// Percorre o array
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];   // Soma os números pares
    } else {
        somaImpares += numeros[i]; // Soma os números ímpares
    }
}

// Exibe os resultados
console.log("Soma dos números pares: " + somaPares);
console.log("Soma dos números ímpares: " + somaImpares);