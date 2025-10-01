let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")



console.log("---Resposta---")
if (n1 < n2) { n1 = n1 * 10, n2 = n2 / 2; }
else { n2 = n2 * 10, n1 = n1 / 2; }

let soma = n1 + n2

if (soma % 2 == 0) {console.log("Resultado é Par");}
else {console.log("Resultado é Ímpar");}


    


