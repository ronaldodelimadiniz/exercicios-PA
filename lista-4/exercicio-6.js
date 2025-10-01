let input = require('readline-sync')

let n1 = input.questionInt("Digite o 1º número: ")
let n2 = input.questionInt("Digite o 2º número: ")


console.log("---Resposta---")

if (n1<n2) {console.log("Os números na ordem crescente são: ", n1," e ",n2);}

else{
    if (n1==n2) {console.log("Os números são iguais: ",n1);}
    
}





