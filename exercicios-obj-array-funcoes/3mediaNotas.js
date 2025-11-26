/* 
function calcularMedia(notas) {
    var soma = 0;

    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    var media = soma / notas.length;
    return media;
}

// Exemplo de uso
var notasDoAluno = [8, 7, 9, 6];
var resultado = calcularMedia(notasDoAluno);

console.log("Média final:", resultado);
*/

const rs = require('readline-sync');


function calcularMedia(notas) {
    var soma = 0;

    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    var media = soma / notas.length;
    return media;
}

// --- Entrada de dados ---
var qtdNotas = Number(rs.question("Quantas notas deseja inserir? "));

var listaNotas = [];

for (var i = 0; i < qtdNotas; i++) {
    var nota = Number(rs.question(`Digite a nota ${i + 1}: `));
    listaNotas.push(nota);
}

// --- Processamento ---
var mediaFinal = calcularMedia(listaNotas);

// --- Saída ---
console.log("\n--- Resultado ---");
console.log("Notas digitadas:", listaNotas);
console.log("Média final:", mediaFinal);

