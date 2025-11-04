//Desenvolva um algoritmo que leia um número e mostre na tela os números entre o número lido e 20.

let input = require('readline-sync');
let numero = input.questionInt("Digite um número:");

// Verifica se o número é menor que 20
if (numero < 20) {
  for (let i = numero; i <= 20; i++) {
    console.log(i);
  }
} else {
  console.log("O número digitado deve ser menor que 20!");
}