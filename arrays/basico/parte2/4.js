//Crie um array carros, onde cada carro tem:

//marca
//modelo
//ano
//Mostre no console apenas os modelos.

let carros = [
  { marca: "Toyota", modelo: "Corolla", ano: 2022 },
  { marca: "Honda", modelo: "Civic", ano: 2020 },
  { marca: "Ford", modelo: "KA", ano: 2019 }
];

// Mostra apenas os modelos no console
console.log("Modelos dos carros:");
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i].modelo);
}