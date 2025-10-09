   //Peça um número final e exiba todos os números pares e ímpares até ele.
   
   // Solicita ao usuário um número final
    let input = require('readline-sync')
    let numeroFinal = input.questionInt("Digite um número final:");

    // Inicializa o contador
    let i = 1;

    // Laço while para percorrer até o número final
    while (i <= numeroFinal) {
      if (i % 2 == 0) {
        console.log(i, " é par");
      } else {
        console.log(i, " é ímpar");
      }
      i++;
    }

    /* Utilizado o comando while porque não sei quantas vezes vou repetir
    o laço*/ 