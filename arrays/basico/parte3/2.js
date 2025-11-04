//Dado um array de nomes, mostre quantos nomes começam com a letra "A".

let nomes = ["Ana", "João", "Amanda", "Carlos", "Alice", "Bruno"];

// Variável para contar os nomes que começam com 'A'
let contador = 0;

// Percorre o array
for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].charAt(0).toUpperCase() === "A") {
    contador++;
  }
}

// Exibe o resultado
console.log("Array de nomes: ", nomes);
console.log("Quantidade de nomes que começam com 'A': ", contador);
