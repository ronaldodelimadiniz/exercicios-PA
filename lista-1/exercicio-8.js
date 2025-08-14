
let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro numero: ")
let n2 = input.questionInt("Digite o segundo numero: ")
let n3 = input.questionInt("Digite o terceiro numero: ")

console.log("--Resposta--")

let resp1 = n1 + 10;
let resp2 = n2 - 5;
let resp3 = n3 * 2;

console.log("N1 = ", resp1)
console.log("N2 = ", resp2)
console.log("N3 = ", resp3)