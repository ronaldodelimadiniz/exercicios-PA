function estatisticasNotas(notas) {
    let soma = 0;
    let maior = notas[0];
    let menor = notas[0];

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];

        if (notas[i] > maior) {
            maior = notas[i];
        }
        if (notas[i] < menor) {
            menor = notas[i];
        }
    }

    let media = soma / notas.length;

    // Retorna um objeto com os resultados
    return {
        media: parseFloat(media.toFixed(1)),
        maior: maior,
        menor: menor
    };
}

// Exemplo de uso:
let notasAlunos = [8, 5, 10, 7, 6];

let resultado = estatisticasNotas(notasAlunos);

console.log("📊 Estatísticas das notas:");
console.log(resultado);