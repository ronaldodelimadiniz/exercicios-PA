//Faça uma função calcularIdadeMedia que recebe um array de objetos de pessoas (com nome e idade) e retorna a idade média.

function calcularIdadeMedia(pessoas) {
    let soma = 0;

    for (let i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].idade;
    }

    let media = soma / pessoas.length;
    return media;
}

// Exemplo de uso:
let grupo = [
    { nome: "Kaiky", idade: 17 },
    { nome: "Ronaldo", idade: 43 },
    { nome: "Ricardo", idade: 38 },
    { nome: "Diego", idade: 22 },
    { nome: "Eduarda", idade: 35 }
];

let idadeMedia = calcularIdadeMedia(grupo);
console.log("A idade média do grupo é: " + idadeMedia + " anos");