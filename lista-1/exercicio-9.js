let input = require('readline-sync')

let n1 = input.questionInt("Digite um numero: ")

console.log("--Resposta--")

n1 = (n1 - 3) + n1;

console.log("Resposta = ", n1)