//Desenvolva um algoritmo que leia três números e mostre na tela os números entre os dois maiores

let input = require('readline-sync');
let n1 = input.questionInt("Digite o primeiro número: ");
let n2 = input.questionInt("Digite o segundo número: ");
let n3 = input.questionInt("Digite o terceiro número: ");

// Coloca os números em ordem crescente
let maior, segundoMaior;

if (n1 >= n2 && n1 >= n3) {
  maior = n1;
  segundoMaior = n2 >= n3 ? n2 : n3;
} else if (n2 >= n1 && n2 >= n3) {
  maior = n2;
  segundoMaior = n1 >= n3 ? n1 : n3;
} else {
  maior = n3;
  segundoMaior = n1 >= n2 ? n1 : n2;
}

let i = segundoMaior + 1;

console.log(`Números entre ${segundoMaior} e ${maior}:`);

while (i < maior) {
  console.log(i);
  i++;
}