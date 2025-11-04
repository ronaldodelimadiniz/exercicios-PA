//Faça um array notas com 5 números. Calcule a média das notas e exiba se o aluno foi aprovado ou reprovado (média ≥ 6).

let notas = [7, 5, 8, 6, 9];

// Calcula a soma das notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

// Calcula a média
let media = soma / notas.length;

// Mostra os resultados
console.log("Notas: ", notas);
console.log("Média: ", media.toFixed(2));

if (media >= 6) {
  console.log("Situação: Aprovado ✅");
} else {
  console.log("Situação: Reprovado ❌");
}