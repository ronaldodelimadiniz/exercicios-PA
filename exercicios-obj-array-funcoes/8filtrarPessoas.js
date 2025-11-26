const rs = require('readline-sync');

// Matriz (array) de pessoas
var pessoas = [
    { nome: "Ana", idade: 15 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carla", idade: 18 },
    { nome: "Diego", idade: 30 },
    { nome: "Elisa", idade: 12 },
    { nome: "Fernanda", idade: 25 }
];

// Função que retorna apenas pessoas com idade acima da filtrada
function filtrarPorIdade(lista, idadeFiltro) {
    var resultado = [];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].idade > idadeFiltro) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

// Entrada do usuário
var idadeDigitada = Number(rs.question("Filtrar pessoas com idade acima de qual valor? "));

// Processamento
var pessoasFiltradas = filtrarPorIdade(pessoas, idadeDigitada);

// Saída
console.log("\n--- Pessoas Encontradas ---");

if (pessoasFiltradas.length === 0) {
    console.log("Nenhuma pessoa encontrada com idade acima de " + idadeDigitada);
} else {
    console.log(pessoasFiltradas);
}
