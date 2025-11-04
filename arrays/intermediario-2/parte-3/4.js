//Crie uma função calcularFolha que receba um array de funcionários (com nome e salário) e retorne o valor total da folha de pagamento.

function calcularFolha(funcionarios) {
    let total = 0;

    for (let i = 0; i < funcionarios.length; i++) {
        total += funcionarios[i].salario;
    }

    return total;
}


let equipe = [
    { nome: "Kaiky", salario: 4500 },
    { nome: "Ronaldo", salario: 10500 },
    { nome: "Ricardo", salario: 3800 },
    { nome: "Diego", salario: 5000 },
    { nome: "Eduarda", salario: 3900 }
];

let totalFolha = calcularFolha(equipe);

console.log("💰 Valor total da folha de pagamento: R$ " + totalFolha.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));