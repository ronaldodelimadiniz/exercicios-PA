let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")

console.log("---Resposta---")

if (n1 < 5){ console.log("Você digitou o número ",n1, " e ele é menor que 5 😊");}

else {console.log("Você digitou um número igual ou maior que 5 😢. Digite um número menor que 5. ");}