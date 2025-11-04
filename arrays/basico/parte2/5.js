//Crie um array usuarios com 4 objetos, cada um com:

//nome
//e-mail
//idade
//Mostre apenas os nomes dos maiores usuários de 18 anos.

let usuarios = [
  { nome: "Kaiky", email: "kaiky@email.com", idade: 17 },
  { nome: "Ronaldo", email: "ronaldo@email.com", idade: 43 },
  { nome: "Pedro", email: "pedro@email.com", idade: 19 },
  { nome: "Ana", email: "ana@email.com", idade: 16 }
];

// Mostra apenas os nomes dos usuários maiores de 18 anos
console.log("Usuários com mais de 18 anos: ");
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].idade > 18) {
    console.log(usuarios[i].nome);
  }
}