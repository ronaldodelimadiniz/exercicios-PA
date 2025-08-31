let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")

console.log("---Resposta---")
let soma = n1 + n2
n1=n1*10
n2=n2*10

 if (soma < 10) {console.log("Resposta 1: ", n1, "\nResposta 2: ", n2);}
else {console.log("A soma dos números digitados é igual ou maior que 10:", soma);}

 
