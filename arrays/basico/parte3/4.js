//Faça um array de objetos representando alunos com notas. Mostre apenas os que têm nota maior ou igual a 6.

let alunos = [
  { nome: "Kaiky", nota: 8 },
  { nome: "Ronaldo", nota: 9 },
  { nome: "Ricardo", nota: 5 },
  { nome: "Pedro", nota: 4 },
  { nome: "Lucas", nota: 6 }
];

// Mostra apenas os alunos com nota maior ou igual a 6
console.log("Alunos aprovados (nota >= 6): ");
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 6) {
    console.log(`${alunos[i].nome} - Nota: ${alunos[i].nota}`);
  }
}