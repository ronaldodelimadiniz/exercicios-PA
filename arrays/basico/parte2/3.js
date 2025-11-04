//Faça um array livroscom 3 objetos (título e autor). Mostre todos os títulos usando um for.

// Cria o array com 3 objetos (livros)
let livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
  { titulo: "1984", autor: "George Orwell" }
];

// Exibe todos os títulos usando um laço for
console.log("Lista de títulos dos livros: ");
for (let i = 0; i < livros.length; i++) {
  console.log(livros[i].titulo);
}