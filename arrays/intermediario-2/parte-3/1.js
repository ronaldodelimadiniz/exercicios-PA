//Crie uma função aprovados que recebe um array de alunos, onde cada aluno tem:

//nome
//nota1
//nota2
//Calcule a média e mostre os alunos com média maior ou igual a 6.

function aprovados(alunos) {
    console.log("📋 Lista de Alunos Aprovados:");
    
    for (let i = 0; i < alunos.length; i++) {
        let media = (alunos[i].nota1 + alunos[i].nota2) / 2;
        
        if (media >= 6) {
            console.log(`- ${alunos[i].nome} | Média: ${media.toFixed(1)}`);
        }
    }
}


let turma = [
    { nome: "Kaiky", nota1: 8, nota2: 7 },
    { nome: "Ronaldo", nota1: 9, nota2: 8 },
    { nome: "Ricardo", nota1: 6, nota2: 7 },
    { nome: "Diego", nota1: 7, nota2: 8 },
    { nome: "Eduarda", nota1: 3, nota2: 6 }
];

aprovados(turma);