//Elabore um algoritmo que leia um número e mostre a tabuado do número lido, utilizando uma estrutura de repetição. 

let input = require('readline-sync');
let numero = input.questionInt("Digite um número para ver a tabuada: ");

console.log("Tabuada do " + numero + ":");

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}