//Faça um programa que receba um array de 6 nomes e uma variável busca. Mostre se o nome digitado busca está ou não dentro do array.

let nomes = ["Kaiky", "Ronaldo", "Ricardo", "Diego", "Maria", "Pedro"];

// Solicita um nome para busca

let input = require('readline-sync');
let busca = input.questionInt("Digite o nome que deseja buscar: ");

// Verifica se o nome está no array (case sensitive)
if (nomes.includes(busca)) {
  console.log(`O nome "${busca}" foi encontrado no array! ✅`);
} else {
  console.log(`O nome "${busca}" NÃO foi encontrado no array. ❌`);
}