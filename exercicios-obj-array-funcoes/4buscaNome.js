const rs = require('readline-sync');

// Array de nomes
var nomes = ["Kaiky", "Bruno", "Carlos", "Daniela", "Ronaldo"];

// Função que verifica se o nome NÃO existe no array
function nomeNaoExiste(lista, nomeBuscado) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].toLowerCase() === nomeBuscado.toLowerCase()) {
            return false; // existe
        }
    }
    return true; // não existe
}

// Entrada do usuário
var nomeDigitado = rs.question("Digite um nome para verificar: ");

// Processamento
var resultado = nomeNaoExiste(nomes, nomeDigitado);

// Saída
console.log("\n--- Resultado ---");

if (resultado === false) {
    console.log("O nome '",nomeDigitado,"' foi encontrado no banco de dados");
} else {
    console.log("O nome '",nomeDigitado,"' não existe no banco de dados");
}
