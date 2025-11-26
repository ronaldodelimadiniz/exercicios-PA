const rs = require('readline-sync');

// Criar o objeto do aluno a partir das entradas do usuário
const aluno = {
    nome: rs.question("Digite o nome do aluno: "),
    idade: Number(rs.question("Digite a idade do aluno: ")),
    curso: rs.question("Digite o curso do aluno: ")
};

// Função que recebe um objeto aluno e retorna uma frase de apresentação
function apresentarAluno(obj) {
    return `O aluno ${obj.nome}, de ${obj.idade} anos, está matriculado no curso de ${obj.curso}.`;
}

// Testando no terminal
console.log("\n--- Resultado ---");
console.log(apresentarAluno(aluno));
