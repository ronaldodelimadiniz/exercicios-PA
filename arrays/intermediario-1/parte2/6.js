//Faça um array alunos/com 5:

//nome
//nota1
//nota2
//Calcule a média de cada aluno e mostre se ele foi aprovado (média ≥ 6) ou não.

let alunos = [
  { nome: "Kaiky", nota1: 7, nota2: 8 },
  { nome: "Ronaldo", nota1: 9, nota2: 6 },
  { nome: "Ricardo", nota1: 5, nota2: 10 },
  { nome: "Diego", nota1: 4, nota2: 5 },
  { nome: "Elisa", nota1: 6, nota2: 7 }
];

// Percorre o array para calcular a média e exibir o resultado
for (let i = 0; i < alunos.length; i++) {
  let media = (alunos[i].nota1 + alunos[i].nota2) / 2;

  console.log(`Aluno: ${alunos[i].nome}`);
  console.log(`Média: ${media.toFixed(2)}`);

  if (media >= 6) {
    console.log("Situação: Aprovado ✅\n");
  } else {
    console.log("Situação: Reprovado ❌\n");
  }
}