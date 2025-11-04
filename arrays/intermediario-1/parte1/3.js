//Crie um array com os nomes de 6 cidades. Peça para o aluno mostrar apenas as cidades que possuem mais de 5 letras.

let cidades = ["São Paulo", "Rio", "Curitiba", "Londres", "Roma", "Salvador"];

// Mostra apenas as cidades com mais de 5 letras
console.log("Cidades com mais de 5 letras: ");
for (let i = 0; i < cidades.length; i++) {
  if (cidades[i].length > 5) {
    console.log(cidades[i]);
  }
}