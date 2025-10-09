//Solicite uma senha até que o usuário digite "1234". Quando acertar, mostre “Acesso permitido”.

let input = require('readline-sync')
let senha = "";

// Continua pedindo até que a senha correta seja digitada
while (senha !== "1234") {
    senha = input.questionInt("Digite a senha:");
}

// Exibe mensagem de acesso permitido
console.log("Acesso permitido");

/* Utilizado o comando while porque não sei quantas vezes o usúario vai digitar a senha até acertar.*/