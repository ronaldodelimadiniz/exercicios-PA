//Faça uma matriz com objetos de alunos contendo:

//nome
//idade
//curso
//Mostre a todos os alunos que têm menos de 18 anos e estão no curso de “Informática”.

let alunos = [
    { nome: "Kaiky", idade: 17, curso: "Informática" },
    { nome: "Ronaldo", idade: 19, curso: "Mecatrônica" },
    { nome: "Ricardo", idade: 16, curso: "Administração" },
    { nome: "Diego", idade: 16, curso: "Informática" },
    { nome: "Eduarda", idade: 20, curso: "Nutrição" }
];

// Filtrando os alunos com menos de 18 anos e curso de Informática
let resultado = alunos.filter(function(aluno) {
    return aluno.idade < 18 && aluno.curso === "Informática";
});

// Exibindo os resultados
console.log("Alunos com menos de 18 anos e no curso de Informática: ");
for (let i = 0; i < resultado.length; i++) {
    console.log(`Nome: ${resultado[i].nome}, Idade: ${resultado[i].idade}, Curso: ${resultado[i].curso}`);
}