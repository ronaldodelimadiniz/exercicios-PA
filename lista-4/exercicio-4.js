let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")
let n3 = input.questionInt("Digite o 3º número: ")
let maior

console.log("---Resposta---")

if (n1>n2) {
    if (n1>n3) {maior = n1;}
    else{maior = n3;}
}
else{
    if (n2>n3) {maior = n2;}
    else{maior = n3;}
}

console.log("O Maior número é ",maior);


