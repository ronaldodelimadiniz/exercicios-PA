//Crie um array veiculoscom:

//marca
//modelo
//ano
//preco
//Mostre o veículo mais caro e o mais antigo.

let veiculos = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020, preco: 95000 },
    { marca: "Honda", modelo: "Civic", ano: 2018, preco: 87000 },
    { marca: "Ford", modelo: "Fiesta", ano: 2015, preco: 45000 },
    { marca: "Chevrolet", modelo: "Onix", ano: 2022, preco: 78000 },
    { marca: "BMW", modelo: "320i", ano: 2019, preco: 185000 }
];

// Inicializa variáveis para armazenar os resultados
let maisCaro = veiculos[0];
let maisAntigo = veiculos[0];

// Percorre o array
for (let i = 1; i < veiculos.length; i++) {
    // Verifica o mais caro
    if (veiculos[i].preco > maisCaro.preco) {
        maisCaro = veiculos[i];
    }
    // Verifica o mais antigo
    if (veiculos[i].ano < maisAntigo.ano) {
        maisAntigo = veiculos[i];
    }
}

// Exibe os resultados
console.log("🚗 Veículo mais caro:");
console.log(`Marca: ${maisCaro.marca}, Modelo: ${maisCaro.modelo}, Ano: ${maisCaro.ano}, Preço: ${maisCaro.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);

console.log("\n🕰️ Veículo mais antigo:");
console.log(`Marca: ${maisAntigo.marca}, Modelo: ${maisAntigo.modelo}, Ano: ${maisAntigo.ano}, Preço: ${maisAntigo.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
