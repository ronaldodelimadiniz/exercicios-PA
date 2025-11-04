//Crie uma função maiorNumero que recebe um array de números e retorna o maior valor.

function maiorNumero(numeros) {
    let maior = numeros[0]; // começa com o primeiro valor do array

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior;
}

// Exemplo de uso:
let lista = [12, 45, 7, 89, 23];
let resultado = maiorNumero(lista);

console.log("O maior número é: " + resultado);
