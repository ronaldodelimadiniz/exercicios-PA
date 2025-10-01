let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")

console.log("---Resposta---")

if (n1 < n2) { n1 = n1 + 5; }
else{n2 = n2+5;}

    if (n1 > n2) { console.log("O maior número é ", n1); }
    else { console.log("O maior número é ", n2); }


