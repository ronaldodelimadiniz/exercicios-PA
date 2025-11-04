//Crie um conjunto de objetos com pessoas (nome e cidade). Mostre apenas as pessoas que moram em “São Paulo”.

let pessoas = [
  { nome: "Kaiky", cidade: "São Paulo" },
  { nome: "Ronaldo", cidade: "Pernambuco" },
  { nome: "Ricardo", cidade: "São Paulo" },
  { nome: "Diego", cidade: "Belo Horizonte" },
  { nome: "Eduarda", cidade: "Curitiba" }
];

// Mostra apenas as pessoas que moram em São Paulo
console.log("Pessoas que moram em São Paulo: ");
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].cidade === "São Paulo") {
    console.log(`${pessoas[i].nome} - ${pessoas[i].cidade}`);
  }
}