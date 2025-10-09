  
  //Peça 5 números e mostre a soma total ao final.
  let input = require('readline-sync')
  let soma = 0;

    // Laço para pedir 5 números
    for (let i = 1; i <= 5; i++) {
      let numero = input.questionInt("Digite o número ", i , ":");
      soma += numero;
    }

    // Exibe a soma total
    console.log("A soma total dos 5 números é: ", soma);

/* Utilizado o comando for porque o laço possui um intervalo
 fixo, portanto, sei quantas vezes preciso repetir.*/ 
