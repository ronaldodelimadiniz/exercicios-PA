//Crie uma função chamada mostrarNomes que recebe um array de nomes e mostre cada nome no console.

function mostrarNomes(nomes) {
    for (let i = 0; i < nomes.length; i++) {
        console.log(`Nome ${i + 1}: ${nomes[i]}`);
    }
}

let listaDeNomes = ["Kaiky", "Ronaldo", "Ricardo", "Diego", "Eduarda"];
mostrarNomes(listaDeNomes);