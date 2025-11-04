//Faça uma função "buscarNome" que recebe um array de nomes e um nome a ser pesquisado. 
// Ela deve retornar trues e o nome estiver na lista e falsecaso contrário.

function buscarNome(lista, nomeProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nomeProcurado) {
            return true; // encontrou o nome
        }
    }
    return false; // não encontrou
}


let nomes = ["Kaiky", "Ronaldo", "Ricardo", "Diego", "Eduarda"];

let input = require('readline-sync');
let inputTerminal = input.question("Digite o nome que deseja pesquisar: ");

console.log(buscarNome(nomes, inputTerminal));
