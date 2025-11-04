//Crie uma matriz de idades e mostre a média delas.

let idades = [17, 22, 25, 30, 27];

// Variável para somar as idades
let soma = 0;

// Percorre o array somando todas as idades
for (let i = 0; i < idades.length; i++) {
  soma += idades[i];
}

// Calcula a média
let media = soma / idades.length;

// Exibe o resultado
console.log("Idades: ", idades);
console.log("Média das idades: ", media.toFixed(2));