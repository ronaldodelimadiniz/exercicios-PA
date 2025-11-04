// Crie um algoritmo que leia dois números e mostre os números entre eles

let input = require('readline-sync');
let n1 = input.questionInt("Digite o primeiro número: ");
let n2 = input.questionInt("Digite o segundo número: ");

// Garante que n1 seja menor que n2
if (n1 < n2) {
  let i = n1 + 1; // começa no número seguinte
  while (i < n2) {
    console.log(i);
    i++;
  }
} else {
  console.log("O primeiro número deve ser menor que o segundo!");
}