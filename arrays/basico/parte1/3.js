//Crie um array chamado cores. Peça para o aluno adicionar uma nova cor na posição 3 e exibir o array atualizado.

let cores = ["Vermelho", "Azul", "Verde", "Amarelo"];

// Pede ao usuário uma nova cor
let input = require('readline-sync');
let novaCor = input.questionInt("Digite uma nova cor para adicionar na posição 3: ");

// Adiciona a nova cor na posição 3 (índice 2)
cores[2] = novaCor;

// Exibe o array atualizado
console.log("Array atualizado:", cores);