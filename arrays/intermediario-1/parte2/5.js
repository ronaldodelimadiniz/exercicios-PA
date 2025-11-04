//Crie um array clientes com:

//nome
//idade
//cidade
//Peça ao aluno para exibir apenas os nomes dos clientes de “São Paulo”.

let clientes = [
  { nome: "Kaiky", idade: 25, cidade: "São Paulo" },
  { nome: "Ronaldo", idade: 32, cidade: "Pernambuco" },
  { nome: "Carla", idade: 28, cidade: "São Paulo" },
  { nome: "Diego", idade: 40, cidade: "Curitiba" },
  { nome: "Elisa", idade: 35, cidade: "São Paulo" }
];

// Mostra apenas os nomes dos clientes de São Paulo
console.log("Clientes de São Paulo: ");
for (let i = 0; i < clientes.length; i++) {
  if (clientes[i].cidade === "São Paulo") {
    console.log(clientes[i].nome);
  }
}