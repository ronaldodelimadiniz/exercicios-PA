//Crie um array filmescom:

//titulo
//ano
//classificacao
//Mostre apenas os filmes lançados após 2010.

let filmes = [
  { titulo: "Avatar", ano: 2009, classificacao: "12 anos" },
  { titulo: "Vingadores: Ultimato", ano: 2019, classificacao: "12 anos" },
  { titulo: "A Origem", ano: 2010, classificacao: "14 anos" },
  { titulo: "Interestelar", ano: 2014, classificacao: "10 anos" },
  { titulo: "Duna", ano: 2021, classificacao: "14 anos" }
];

// Mostra apenas os filmes lançados após 2010
console.log("Filmes lançados após 2010: ");
for (let i = 0; i < filmes.length; i++) {
  if (filmes[i].ano > 2010) {
    console.log(`${filmes[i].titulo} (${filmes[i].ano}) - Classificação: ${filmes[i].classificacao}`);
  }
}