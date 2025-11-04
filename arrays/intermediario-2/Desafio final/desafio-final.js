//Crie um pequeno sistema que use funções, matrizes e objetos juntos:
//1- Crie um array "alunosvazio".
//2- Crie uma função "adicionarAluno" (nome, idade, nota1, nota2) que adiciona um novo objeto ao array.
//3- Crie uma função "mostrarAlunos"() que exiba todos os alunos cadastrados.
//4- Crie uma função "aprovados"()que mostre apenas os alunos com média ≥ 6.
//5- Faça o programa testar essas funções no final.

// 1- Cria um array vazio para armazenar os alunos
let alunos = [];

// 2- Função para adicionar um novo aluno ao array
function adicionarAluno(nome, idade, nota1, nota2) {
    let aluno = {
        nome: nome,
        idade: idade,
        nota1: nota1,
        nota2: nota2
    };
    alunos.push(aluno);
}

// 3- Função para mostrar todos os alunos cadastrados
function mostrarAlunos() {
    console.log("📋 Lista de Alunos Cadastrados:");
    for (let i = 0; i < alunos.length; i++) {
        console.log(`- ${alunos[i].nome} (${alunos[i].idade} anos) | Notas: ${alunos[i].nota1}, ${alunos[i].nota2}`);
    }
}

// 4- Função para mostrar apenas os alunos aprovados (média ≥ 6)
function aprovados() {
    console.log("\n✅ Alunos Aprovados (média ≥ 6):");
    for (let i = 0; i < alunos.length; i++) {
        let media = (alunos[i].nota1 + alunos[i].nota2) / 2;
        if (media >= 6) {
            console.log(`- ${alunos[i].nome} | Média: ${media.toFixed(1)}`);
        }
    }
}

// 5- Testando as funções do sistema
adicionarAluno("Kaiky", 17, 8, 7);
adicionarAluno("Ronaldo", 18, 5, 4);
adicionarAluno("Ricardo", 16, 9, 10);
adicionarAluno("Diego", 19, 6, 6);
adicionarAluno("Eduarda", 17, 3, 5);

mostrarAlunos();
aprovados();