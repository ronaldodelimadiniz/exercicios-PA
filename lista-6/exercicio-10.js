//Elabore um algoritmo que leia um número entre cinco e dez e mostre o seu valor na tela. 

let input = require('readline-sync');
let numero = input.questionInt("Digite um número entre 5 e 10: ");

if (numero >= 5 && numero <= 10) {
  for (let i = 1; i <= 1; i++) {  // laço apenas para mostrar o valor
    console.log("O número digitado foi: ", numero);
  }
} else {
  console.log("O número deve estar entre 5 e 10!");
}