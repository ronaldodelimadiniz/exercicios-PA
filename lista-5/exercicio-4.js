//Peça um número e exiba a contagem regressiva até 0.

 // Solicita um número ao usuário
  let input = require('readline-sync')   
 let numero = input.questionInt("Digite um número para iniciar a contagem regressiva:");

    // Laço while para contar até 0
    while (numero >= 0) {
      console.log(numero);
      numero--;
    }

    // Mensagem final
   console.log("Contagem regressiva concluída!");

    /* Utilizado o comando while porque não sei quantas vezes vou repetir
    o laço*/ 