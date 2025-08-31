let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")

console.log("---Resposta---")
n1 = n1 - 10

if (n1 > 10){ console.log("O resultado é ",n1, " e ele é maior que 10 😊");}

else {console.log("O resultado é igual ou menor que 10 😢. Digite outro número. ");}