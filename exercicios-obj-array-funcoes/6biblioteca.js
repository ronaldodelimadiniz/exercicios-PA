const rs = require('readline-sync');

// Array de objetos representando livros
var livros = [
    { titulo: "O Programador Pragmático", autor: "Andrew Hunt", ano: 1999 },
    { titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008 },
    { titulo: "JavaScript: The Good Parts", autor: "Douglas Crockford", ano: 2011 },
    { titulo: "Node.js Design Patterns", autor: "Mario Casciaro", ano: 2016 },
    { titulo: "You Don't Know JS", autor: "Kyle Simpson", ano: 2014 }
];

// Função que retorna livros publicados após determinado ano
function filtrarLivrosPorAno(lista, anoFiltro) {
    var resultado = [];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].ano > anoFiltro) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

// Entrada do usuário
var anoDigitado = Number(rs.question("Digite o ano para filtrar livros publicados depois de: "));

// Processamento
var livrosFiltrados = filtrarLivrosPorAno(livros, anoDigitado);

// Saída
console.log("\n--- Livros Encontrados ---");

if (livrosFiltrados.length === 0) {
    console.log("Nenhum livro foi encontrado após este ano.");
} else {
    console.log(livrosFiltrados);
}
