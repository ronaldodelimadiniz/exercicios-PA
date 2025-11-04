//Monte um array funcionarioscom:

//nome
//cargo
//salario
//Exiba todos os funcionários que ganham mais de R$ 2.000,00.

let funcionarios = [
  { nome: "Kaiky", cargo: "Desenvolvedor", salario: 3800 },
  { nome: "Ronaldo", cargo: "Engenheiro", salario: 10500 },
  { nome: "Carla", cargo: "Gerente", salario: 4200 },
  { nome: "Diego", cargo: "Estagiário", salario: 1200 }
];

// Mostra apenas os funcionários com salário acima de R$ 2.000,00
console.log("Funcionários com salário acima de R$ 2.000,00: ");
for (let i = 0; i < funcionarios.length; i++) {
  if (funcionarios[i].salario > 2000) {
    console.log(`${funcionarios[i].nome} — ${funcionarios[i].cargo} — R$ ${funcionarios[i].salario.toFixed(2)}`);
  }
}