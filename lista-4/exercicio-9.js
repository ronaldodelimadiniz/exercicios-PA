let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")
let n3 = input.questionInt("Digite o 3º número: ")
let n4 = input.questionInt("Digite o 4º número: ")

let soma = n1 + n2
let sub = n3 - n4

soma = soma + sub


console.log("---Resposta---")
if (soma > 10) { console.log("Resultado maior que 10"); }
else { console.log("Resultado menor que 10"); }





