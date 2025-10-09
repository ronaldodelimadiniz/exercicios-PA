//Verifique se um número informado é primo (divisível apenas por 1 e ele mesmo).

// Solicita um número ao usuário
let input = require('readline-sync')
let numero = input.questionInt("Digite um número para verificar se é primo:");
let divisor = 2;
let primo = true;

// Números menores que 2 não são primos
if (numero < 2) {
    primo = false;
} else {
    // Verifica se há algum divisor além de 1 e ele mesmo
    while (divisor < numero) {
        if (numero % divisor === 0) {
            primo = false;
            break;
        }
        divisor++;
    }
}

// Exibe o resultado
if (primo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}

/* Utilizado o comando while porque preciso repetir até uma condição mudar.*/

