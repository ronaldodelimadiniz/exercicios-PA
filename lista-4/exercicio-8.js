let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")


console.log("---Resposta---")

if (n1 > 10) { n1 = n1 + 5; }
else { n1 = n1 + 20 }

if (n1 > 25) { console.log("O resultado é: ", n1); }







