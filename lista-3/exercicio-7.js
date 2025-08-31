let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")
let n3 = input.questionInt("Digite o terceiro número: ")

console.log("---Resposta---")
let resp = n1 + n2 + n3

 if (resp > 20) {console.log("Resposta: ", resp);}
else {console.log("O resultado é igual ou menor que 20 😢: ", resp);}

 
