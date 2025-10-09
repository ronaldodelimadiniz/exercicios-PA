//Peça a quantidade de alunos e, para cada um, leia 3 notas. Mostre a média e indique se foi aprovado (média ≥ 7).

// Solicita a quantidade de alunos
let input = require('readline-sync')
let quantidade = input.questionInt("Digite a quantidade de alunos:");
let contador = 1;

// Laço while para processar cada aluno
while (contador <= quantidade) {
    let soma = 0;

    // Lê 3 notas para o aluno atual
    for (let i = 1; i <= 3; i++) {
        let nota = input.questionInt("Digite a nota " + i + " do aluno " + contador + ":");
        soma += nota;
    }

    // Calcula a média
    let media = soma / 3;

    // Estrutura condicional encadeada
    if (media >= 7) {
        console.log("Aluno " + contador + " - Média: " + media.toFixed(2) + " - Aprovado");
    } else if (media >= 5) {
        console.log("Aluno " + contador + " - Média: " + media.toFixed(2) + " - Recuperação");
    } else {
        console.log("Aluno " + contador + " - Média: " + media.toFixed(2) + " - Reprovado");
    }

    contador++;
}

/* Utilizado o comando for na leitura das notas porque o laço possui um intervalo fixo de 3.
Utilizado o comando while porque não sei quantos alunos o usúario vai digitar.*/ 