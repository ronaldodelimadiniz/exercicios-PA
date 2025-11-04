//Elabore um algoritmo que leia dois números, um maior que dez e outro menor que 5, mostre os números lidos. 

let input = require('readline-sync');
let numMaior = input.questionInt("Digite um número MAIOR que 10:");
let numMenor = input.questionInt("Digite um número MENOR que 5:");

if (numMaior > 10 && numMenor < 5) {
  console.log("Números válidos! Exibindo com laço for:");

  for (let i = 1; i <= 2; i++) {
    if (i === 1) {
      console.log("Número maior que 10: ", numMaior);
    } else {
      console.log("Número menor que 5: ", numMenor);
    }
  }

} else {
  console.log("Os números digitados não atendem às condições!");
}