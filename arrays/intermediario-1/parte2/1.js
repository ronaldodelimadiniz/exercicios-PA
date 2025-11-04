//Crie um array pessoascom 5 objetos, cada um contendo:

//nome
//idade
//profissao
//Mostre o nome de quem tem mais de 30 anos .

let pessoas = [
  { nome: "Kaiky", idade: 35, profissao: "Desenvolvedor de Sistemas" },
  { nome: "Ronaldo", idade: 43, profissao: "Engenheiro" },
  { nome: "Carla", idade: 28, profissao: "Professora" },
  { nome: "Diego", idade: 41, profissao: "Médico" },
  { nome: "Elisa", idade: 35, profissao: "Arquiteta" }
];

// Mostra apenas as pessoas com mais de 30 anos
console.log("Pessoas com mais de 30 anos: ");
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade > 30) {
    console.log(pessoas[i].nome);
  }
}