/*Monte um menu interativo com o seguinte formato:

===== MENU PRINCIPAL =====
1 - Calcular Tabuada
2 - Verificar Número Primo
3 - Gerar Sequência de Fibonacci
4 - Calcular Fatorial
0 - Sair
==========================
Cada opção deve executar sua função usando laços de repetição e condicionais.
Se o usuário digitar uma opção inválida, mostre “Opção inválida!”.*/

let input = require('readline-sync')
let opcao = -1;

// Laço while para manter o menu ativo
while (opcao !== 0) {
    opcao = input.questionInt(
        "===== MENU PRINCIPAL =====\n" +
        "1 - Calcular Tabuada \n" +
        "2 - Verificar Número Primo \n" +
        "3 - Gerar Sequência de Fibonacci \n" +
        "4 - Calcular Fatorial \n" +
        "0 - Sair\n" +
        "=========================="
    );

    if (opcao === 1) {
        // Tabuada com for
        let numero = input.questionInt("Digite um número para ver a tabuada:");
        let resultado = "Tabuada de " + numero + ":\n";
        for (let i = 1; i <= 10; i++) {
            resultado += numero + " x " + i + " = " + (numero * i) + "\n";
        }
        console.log(resultado);

    } else if (opcao === 2) {
        // Verificar número primo com while
        let numero = input.questionInt("Digite um número para verificar se é primo:");
        let divisor = 2;
        let primo = true;

        if (numero < 2) {
            primo = false;
        } else {
            while (divisor < numero) {
                if (numero % divisor === 0) {
                    primo = false;
                    break;
                }
                divisor++;
            }
        }

        console.log(numero + (primo ? " é primo." : " não é primo."));

    } else if (opcao === 3) {
        // Fibonacci com while
        let n = input.questionInt("Digite quantos termos da sequência de Fibonacci deseja ver:");
        let termo1 = 1, termo2 = 1, contador = 1;
        let resultado = "Sequência de Fibonacci:\n";

        while (contador <= n) {
            resultado += termo1 + " ";
            let proximo = termo1 + termo2;
            termo1 = termo2;
            termo2 = proximo;
            contador++;
        }

        console.log(resultado);

    } else if (opcao === 4) {
        // Fatorial com while
        let numero = input.questionInt("Digite um número para calcular o fatorial:");
        let fatorial = 1;
        let contador = numero;

        while (contador >= 1) {
            fatorial *= contador;
            contador--;
        }

        console.log(numero + "! = " + fatorial);

    } else if (opcao === 0) {
        console.log("Encerrando o programa...");
    } else {
        console.log("Opção inválida!");
    }
}



