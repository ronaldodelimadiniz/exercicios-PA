let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro numero: ")
let n2 = input.questionInt("Digite o segundo numero: ")

console.log("--Resposta--")

let resp1 = n1 - 3;
let resp2 = n2 + 2;
let resp3 = resp1 + resp2;
let resp4 = resp3 - 1;

console.log("Resposta = ", resp4)