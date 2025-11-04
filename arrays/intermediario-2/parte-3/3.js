//Faça uma função contarPorCidade que recebe um array de pessoas com nome e cidade.
//A função deve mostrar quantas pessoas moram em cada cidade.

function contarPorCidade(pessoas) {
    let contador = {}; // objeto para armazenar o total por cidade

    for (let i = 0; i < pessoas.length; i++) {
        let cidade = pessoas[i].cidade;

        if (contador[cidade]) {
            contador[cidade]++; // soma mais 1 se já existir
        } else {
            contador[cidade] = 1; // inicia o contador da cidade
        }
    }

    // Exibe o resultado formatado
    console.log("🏙️ Quantidade de pessoas por cidade:");
    for (let cidade in contador) {
        console.log(`${cidade}: ${contador[cidade]} pessoa(s)`);
    }
}

// Exemplo de uso:
let pessoas = [
    { nome: "Ana", cidade: "São Paulo" },
    { nome: "Bruno", cidade: "Rio de Janeiro" },
    { nome: "Carla", cidade: "São Paulo" },
    { nome: "Diego", cidade: "Belo Horizonte" },
    { nome: "Eduarda", cidade: "São Paulo" },
    { nome: "Felipe", cidade: "Rio de Janeiro" }
];

// Chama a função
contarPorCidade(pessoas);