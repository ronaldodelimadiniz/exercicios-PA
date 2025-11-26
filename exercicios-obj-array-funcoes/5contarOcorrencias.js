function contarElementos(array) {
    var contagem = {};

    for (var i = 0; i < array.length; i++) {
        var elemento = array[i];

        if (contagem[elemento] === undefined) {
            contagem[elemento] = 1;   // primeira vez que aparece
        } else {
            contagem[elemento]++;     // já existe, então soma +1
        }
    }

    return contagem;
}

// Exemplo de uso
var lista = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

var resultado = contarElementos(lista);

console.log(resultado);
