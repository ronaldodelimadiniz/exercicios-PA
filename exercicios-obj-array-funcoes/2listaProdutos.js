/*// Matriz (array) contendo objetos de produtos
const produtos = [
    { nome: "Mouse", preco: 40 },
    { nome: "Teclado", preco: 150 },
    { nome: "Cabo HDMI", preco: 35 },
    { nome: "Headset", preco: 200 },
    { nome: "Pendrive 32GB", preco: 60 }
];

// Função que filtra produtos acima de 50 com arrow function
function produtosAcimaDe50(lista) {
    return lista.filter(produto => produto.preco > 50);
}

// Testando a função
const resultado = produtosAcimaDe50(produtos);
console.log(resultado);
*/

// Matriz (array) contendo objetos de produtos
const produtos = [
    { nome: "Mouse", preco: 40 },
    { nome: "Teclado", preco: 150 },
    { nome: "Cabo HDMI", preco: 35 },
    { nome: "Headset", preco: 200 },
    { nome: "Pendrive 32GB", preco: 60 }
];

// Função que retorna produtos acima de 50 sem arrow function
function produtosAcimaDe50(lista) {
    var resultado = [];
    
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].preco > 50) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

// Testando a função
var filtrados = produtosAcimaDe50(produtos);
console.log(filtrados);

