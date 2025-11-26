/*
// Array de objetos representando itens do carrinho
var carrinho = [
    { nome: "Mouse", quantidade: 2, preco: 50 },
    { nome: "Teclado", quantidade: 1, preco: 120 },
    { nome: "Headset", quantidade: 3, preco: 80 }
];

// Função que calcula o valor total do carrinho
function calcularTotal(lista) {
    var total = 0;

    for (var i = 0; i < lista.length; i++) {
        var item = lista[i];
        total += item.quantidade * item.preco;
    }

    return total;
}

// Testando
var valorFinal = calcularTotal(carrinho);
console.log("Valor total do carrinho: R$ " + valorFinal);
*/

const rs = require('readline-sync');

// Função que calcula o valor total do carrinho
function calcularTotal(lista) {
    var total = 0;

    for (var i = 0; i < lista.length; i++) {
        var item = lista[i];
        total += item.quantidade * item.preco;
    }

    return total;
}

// Array para armazenar os itens
var carrinho = [];

console.log("=== Sistema de Carrinho de Compras ===");

// Pergunta quantos itens o usuário deseja cadastrar
var qtd = Number(rs.question("Quantos itens deseja inserir? "));

for (var i = 0; i < qtd; i++) {
    console.log(`\n--- Item ${i + 1} ---`);

    var nome = rs.question("Nome do item: ");
    var quantidade = Number(rs.question("Quantidade: "));
    var preco = Number(rs.question("Preço: "));

    // Adiciona o item ao carrinho
    carrinho.push({
        nome: nome,
        quantidade: quantidade,
        preco: preco
    });
}

// Processamento
var totalCarrinho = calcularTotal(carrinho);

// Saída
console.log("\n=== Resultado Final ===");
console.log("Itens cadastrados:", carrinho);
console.log("Valor total do carrinho: R$ " + totalCarrinho);

