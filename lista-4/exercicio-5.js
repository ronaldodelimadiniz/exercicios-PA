let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")
let n3 = input.questionInt("Digite o 3º número: ")
let menor

console.log("---Resposta---")

if (n1<n2) {
    if (n1<n3) {menor = n1;}
    else{menor = n3;}
}
else{
    if (n2<n3) {menor = n2;}
    else{menor = n3;}
}
menor = menor+5

console.log("O Menor número é ",menor);


