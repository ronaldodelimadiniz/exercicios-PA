let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")

console.log("---Resposta---")


 if (n1 == n2) {console.log("Os números são iguais: ", n1 , " e ", n2);}
else {console.log("Os números digitados são diferentes 😢! Digite números iguais para seguir.");}

 
