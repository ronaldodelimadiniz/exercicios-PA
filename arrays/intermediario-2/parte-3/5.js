//Faça uma função buscarAluno que recebe um array de alunos e o nome de um aluno. 
//A função deve retornar o objeto do aluno ou uma mensagem informando que ele não foi encontrado.

function buscarAluno(alunos, nomeProcurado) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomeProcurado.toLowerCase()) {
            return alunos[i]; // retorna o objeto do aluno
        }
    }
    return "❌ Aluno não encontrado!";
}

let turma = [
    { nome: "Kaiky", idade: 17, curso: "Desenvolvimento de Sistemas" },
    { nome: "Ronaldo", idade: 43, curso: "Engenharia" },
    { nome: "Ricardo", idade: 38, curso: "Nutrição" },
    { nome: "Diego", idade: 19, curso: "Logística" },
    { nome: "Eduarda", idade: 17, curso: "Química" }
];

let resultado1 = buscarAluno(turma, "Ronaldo");
let resultado2 = buscarAluno(turma, "Fernando");

console.log(resultado1); // objeto completo
console.log(resultado2); // mensagem de erro



/* Com entrada do Usuário 

let input = require('readline-sync');

// Função que busca um aluno pelo nome
function buscarAluno(alunos, nomeProcurado) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nomeProcurado.toLowerCase()) {
            return alunos[i]; // retorna o objeto do aluno
        }
    }
    return null; // retorna null se não encontrar
}

// Criação da lista de alunos
let turma = [
    { nome: "Ana", idade: 17, curso: "Informática" },
    { nome: "Bruno", idade: 18, curso: "Administração" },
    { nome: "Carla", idade: 16, curso: "Desenvolvimento de Sistemas" },
    { nome: "Diego", idade: 19, curso: "Logística" },
    { nome: "Eduarda", idade: 17, curso: "Química" }
];

// Entrada do nome a ser pesquisado
let nomeBusca = input.question("Digite o nome do aluno que deseja buscar: ");

// Chama a função
let resultado = buscarAluno(turma, nomeBusca);

// Mostra o resultado
if (resultado) {
    console.log("\n✅ Aluno encontrado:");
    console.log(`Nome: ${resultado.nome}`);
    console.log(`Idade: ${resultado.idade}`);
    console.log(`Curso: ${resultado.curso}`);
} else {
    console.log("\n❌ Aluno não encontrado!");
}*/