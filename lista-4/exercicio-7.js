let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")
let n3 = input.questionInt("Digite o 3º número: ")


console.log("---Resposta---")

if (n1 <= n2) {
    if (n1 <= n3) {
        if (n2 <= n3) { console.log(n1, ", ", n2, ", ", n3); }
        else { console.log(n1, ", ", n3, ", ", n2); }
    }
    else {
        if (n2 <= n1) {
            if (n2 <= n3) {
                if (n1 <= n3) { console.log(n2, ", ", n1, ", ", n3); }
                else { console.log(n2, ", ", n3, ", ", n1); }
            }
            else {
                if (n1 <= n2) { console.log(n3, ", ", n1, ", ", n2); }
                else { console.log(n3, ", ", n2, ", ", n1); }
            }
        }

    }
}





