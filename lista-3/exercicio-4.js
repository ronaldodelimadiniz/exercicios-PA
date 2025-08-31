let input = require('readline-sync')

let n1 = input.questionInt("Digite o primeiro número: ")
let n2 = input.questionInt("Digite o segundo número: ")
let n3 = input.questionInt("Digite o terceiro número: ")

console.log("---Resposta---")
n1 = n1 + 5
n2 = n2 + 5
n3 = n3 + 5


 if (n1 > 10) {console.log("O 1º número é maior que 10 👍:", n1);}
/* else {console.log("O 1ºnúmero NÃO é maior que 10:", n1);}*/

  if (n2 > 10) {console.log("O 2º número é maior que 10 👍:", n2);}
  /*else {console.log("O 2º número NÃO é maior que 10:", n2);}*/

  if (n3 > 10) {console.log("O 3º número é maior que 10 👍:", n3);}
  /*else {console.log("O 3º número NÃO é maior que 10:", n3);}*/
