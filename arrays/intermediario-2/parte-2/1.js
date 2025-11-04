//Crie uma função mostrarPessoa que recebe um objeto pessoa com:

//nome
//idade
//cidade
//A função deve mostrar essas informações formatadas no console.

let input = require('readline-sync');
let nome = input.question("Digite o nome: ");
let idade = input.questionInt("Digite a idade: ");
let cidade = input.question("Digite a cidade: ");

function mostrarPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade} anos`);
    console.log(`Cidade: ${pessoa.cidade}`);
}


let pessoa = {
    nome: nome,
    idade: idade,
    cidade: cidade
};

// Chamando a função
mostrarPessoa(pessoa);