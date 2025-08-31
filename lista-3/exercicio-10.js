let input = require('readline-sync')

let n1 = input.questionInt("Digite um número: ")
let resp1
if (n1 < 10) {
    console.log("--- Tabuada do número: ", n1,"---",
        "\n", n1, "x 0 = ", resp1 = n1 * 0,
        "\n", n1, "x 1 = ", resp1 = n1 * 1,
        "\n", n1, "x 2 = ", resp1 = n1 * 2,
        "\n", n1, "x 3 = ", resp1 = n1 * 3,
        "\n", n1, "x 4 = ", resp1 = n1 * 4,
        "\n", n1, "x 5 = ", resp1 = n1 * 5,
        "\n", n1, "x 6 = ", resp1 = n1 * 6,
        "\n", n1, "x 7 = ", resp1 = n1 * 7,
        "\n", n1, "x 8 = ", resp1 = n1 * 8,
        "\n", n1, "x 9 = ", resp1 = n1 * 9,
        "\n", n1, "x 10 = ", resp1 = n1 * 10,
    );}
else { console.log("O número digitado é igual ou maior que 10 😢! Digite números menor que 10."); }


