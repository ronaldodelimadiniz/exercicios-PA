let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")

console.log("---Resposta---")

if (n1 > 10) { console.log("Maior que 10 "); }
else { console.log("Menor que 10.... Didite um número maior que 10."); }

