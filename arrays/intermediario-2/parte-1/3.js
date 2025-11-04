//Faça uma função mediaNotas que recebe um array com 4 notas e retorna a média.

function mediaNotas(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
}

let notasAluno = [8.5, 7.0, 9.0, 6.5];
let resultado = mediaNotas(notasAluno);

console.log("A média das notas é: " + resultado.toFixed(2));