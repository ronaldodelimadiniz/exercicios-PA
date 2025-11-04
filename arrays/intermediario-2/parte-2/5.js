//Crie uma função listarTitulos que recebe uma matriz de objetos de filmes (com título e ano) e mostre apenas os títulos no console.

function listarTitulos(filmes) {
    console.log("🎬 Lista de Títulos:");
    for (let i = 0; i < filmes.length; i++) {
        console.log(`- ${filmes[i].titulo}`);
    }
}

let catalogo = [
    { titulo: "Vingadores: Ultimato", ano: 2019 },
    { titulo: "Homem-Aranha: Sem Volta para Casa", ano: 2021 },
    { titulo: "Pantera Negra", ano: 2018 },
    { titulo: "Duna", ano: 2021 },
    { titulo: "Oppenheimer", ano: 2023 }
];

listarTitulos(catalogo);