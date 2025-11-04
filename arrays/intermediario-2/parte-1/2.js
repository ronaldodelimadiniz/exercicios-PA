//Crie uma função chamada somarNumerosque recebe um array de números e retorna a soma de todos.

function somarNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

// Exemplo de uso:
let lista = [10, 20, 30, 40, 50];
let resultado = somarNumeros(lista);

console.log("A soma dos números é: " + resultado);