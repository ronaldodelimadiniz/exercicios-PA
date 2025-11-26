/*
// Array de objetos representando jogadores
var jogadores = [
    { nome: "Ronaldo", pontos: 120 },
    { nome: "Kaiky", pontos: 80 },
    { nome: "Carlos", pontos: 150 },
    { nome: "Bruno", pontos: 95 }
];

// Função que ordena do maior para o menor ponto
function ordenarJogadores(lista) {
    // Usando função tradicional no sort
    return lista.sort(function(a, b) {
        return b.pontos - a.pontos; // maior primeiro
    });
}

// Testando
var ranking = ordenarJogadores(jogadores);
console.log(ranking);
*/

const rs = require('readline-sync');

// Função que ordena do maior para o menor ponto
function ordenarJogadores(lista) {
    return lista.sort(function(a, b) {
        return b.pontos - a.pontos;
    });
}

// Array para armazenar os jogadores
var jogadores = [];

console.log("=== Cadastro de Jogadores ===");

// Quantos jogadores cadastrar
var qtd = Number(rs.question("Quantos jogadores deseja inserir? "));

for (var i = 0; i < qtd; i++) {
    console.log(`\n--- Jogador ${i + 1} ---`);

    var nome = rs.question("Nome do jogador: ");
    var pontos = Number(rs.question("Pontuação: "));

    jogadores.push({
        nome: nome,
        pontos: pontos
    });
}

// Ordenar ranking
var ranking = ordenarJogadores(jogadores);

// Exibir resultado
console.log("\n=== Ranking Final ===");

for (var i = 0; i < ranking.length; i++) {
    console.log((i + 1) + "º lugar - " + ranking[i].nome + " (" + ranking[i].pontos + " pontos)");
}

