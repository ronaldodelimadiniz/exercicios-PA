//Crie um array usuarios com:

//nome
//senha
//Peça para o aluno criar uma função que receba nome e senha verifique se o usuário está cadastrado e a senha está correta.

let usuarios = [
    { nome: "Kaiky", senha: "1234" },
    { nome: "Ronaldo", senha: "abcd" },
    { nome: "Ricardo", senha: "senha123" },
    { nome: "Diego", senha: "4321" },
    { nome: "Eduarda", senha: "etec2025" }
];

// Função para verificar login
function verificarLogin(nomeDigitado, senhaDigitada) {
    // Procura o usuário no array
    let usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.nome === nomeDigitado && usuario.senha === senhaDigitada;
    });

    // Verifica se foi encontrado
    if (usuarioEncontrado) {
        console.log(`✅ Acesso permitido! Bem-vindo(a), ${usuarioEncontrado.nome}.`);
    } else {
        console.log("❌ Usuário ou senha incorretos!");
    }
}

// Entrada de dados do usuário
let input = require('readline-sync');
let nome = input.question("Digite seu nome: ");
let senha = input.question("Digite sua senha: ", { hideEchoBack: true }); // Oculta a senha ao digitar

// Chama a função para verificar o login
verificarLogin(nome, senha);