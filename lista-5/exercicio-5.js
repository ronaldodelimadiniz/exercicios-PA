//Mostre a tabuada de um número informado pelo usuário (de 1 a 10).

 // Solicita um número ao usuário
 let input = require('readline-sync')    
 let numero = input.questionInt("Digite um número para ver a tabuada:");

    // Gera a tabuada de 1 a 10
    let resultado = "Tabuada do " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
      resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    // Exibe o resultado
    console.log(resultado);

/* Utilizado o comando for porque o laço possui um intervalo
 fixo, portanto, sei quantas vezes preciso repetir.*/ 
