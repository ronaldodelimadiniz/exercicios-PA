let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")

console.log("---Resposta---")
n1 = n1 * 3

 if (n1 > 15) {console.log("Resposta: ", n1);}
else {console.log("O resultado é igual ou menor que 15 😢: ", n1);}

 
