//Crie uma função filtrarMaioresDeIdade que receba um array de pessoas e retorne apenas as que têm 18 anos ou mais.

function filtrarMaioresDeIdade(pessoas) {
    let maiores = [];

    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade >= 18) {
            maiores.push(pessoas[i]);
        }
    }
    maiores.sort(function (a, b) {
        return a.nome.localeCompare(b.nome);
    });

    return maiores;
}

let grupo = [
    { nome: "Kaiky", idade: 17 },
    { nome: "Ronaldo", idade: 43 },
    { nome: "Ricardo", idade: 38 },
    { nome: "Diego", idade: 19 },
    { nome: "Eduarda", idade: 30 }
];

let maioresDeIdade = filtrarMaioresDeIdade(grupo);

console.log("👥 Pessoas com 18 anos ou mais:");
for (let i = 0; i < maioresDeIdade.length; i++) {
    console.log(`- ${maioresDeIdade[i].nome} (${maioresDeIdade[i].idade} anos)`);
}