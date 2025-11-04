//Faça uma função buscarFuncionario que recebe um array de objetos (funcionários) e um nome.
//Ela deve retornar o trabalho encontrado ou uma mensagem dizendo que não existe.

function buscarFuncionario(funcionarios, nomeProcurado) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome === nomeProcurado) {
            return `✅ Funcionário encontrado: ${funcionarios[i].nome} - Cargo: ${funcionarios[i].cargo}`;
        }
    }
    return "❌ Funcionário não encontrado!";
}


let equipe = [
    { nome: "Kaiky", cargo: "Desenvolvedor" },
    { nome: "Ronaldo", cargo: "Engenheiro" },
    { nome: "Ricardo", cargo: "Analista de Qualidade" },
    { nome: "Diego", cargo: "Designer" },
    { nome: "Eduarda", cargo: "Estagiária" }
];

let input = require('readline-sync');
let nome = input.question("Digite o nome do funcionário que deseja buscar: ");

// Chama a função e mostra o resultado
let resultado = buscarFuncionario(equipe, nome);
console.log("\n" + resultado);