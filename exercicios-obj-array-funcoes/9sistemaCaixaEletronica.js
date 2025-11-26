/*
// ======================================
// OBJETO DA CONTA
// ======================================
var conta = {
    agencia: "1234",
    numero: "56789-0",
    senha: "4321",
    saldo: 1500,
    historico: []
};

// ======================================
// FUNÇÃO: VALIDAR ACESSO
// ======================================
function validarAcesso(ag, num, pass) {
    if (ag === conta.agencia && num === conta.numero && pass === conta.senha) {
        return true;
    } else {
        return false;
    }
}

// ======================================
// FUNÇÃO: MOSTRAR SALDO
// ======================================
function mostrarSaldo() {
    return "Saldo atual: R$ " + conta.saldo;
}

// ======================================
// FUNÇÃO: REALIZAR SAQUE
// ======================================
function sacar(valor) {
    if (valor <= 0) {
        return "Valor inválido!";
    }

    if (valor > conta.saldo) {
        return "Saldo insuficiente!";
    }

    // Atualiza o saldo
    conta.saldo -= valor;

    // Cálculo de cédulas
    var restante = valor;
    var notas100 = Math.floor(restante / 100);
    restante = restante % 100;

    var notas50 = Math.floor(restante / 50);
    restante = restante % 50;

    var notas20 = Math.floor(restante / 20);
    restante = restante % 20;

    var notas10 = Math.floor(restante / 10);
    restante = restante % 10;

    // Registrar no histórico
    conta.historico.push("Saque de R$ " + valor);

    // Retorno formatado
    var resultado = "Saque realizado com sucesso!\n\nNotas entregues:\n";
    if (notas100 > 0) resultado += notas100 + " nota(s) de 100\n";
    if (notas50 > 0) resultado += notas50 + " nota(s) de 50\n";
    if (notas20 > 0) resultado += notas20 + " nota(s) de 20\n";
    if (notas10 > 0) resultado += notas10 + " nota(s) de 10\n";

    return resultado;
}

// ======================================
// TESTE DO SISTEMA
// ======================================

// 1. Validar acesso
console.log("Acesso autorizado?", validarAcesso("1234", "56789-0", "4321"));

// 2. Mostrar saldo
console.log(mostrarSaldo());

// 3. Realizar saque
console.log("\n--- Saque ---");
console.log(sacar(380));  // Teste de saque

// 4. Mostrar saldo atualizado
console.log("\n" + mostrarSaldo());

// 5. Histórico
console.log("\nHistórico:", conta.historico);
*/

const rs = require('readline-sync');

// ======================================
// OBJETO DA CONTA
// ======================================
var conta = {
    agencia: "1234",
    numero: "56789-0",
    senha: "4321",
    saldo: 1500,
    historico: []
};

var acessoPermitido = false;

// ======================================
// FUNÇÃO: VALIDAR ACESSO
// ======================================
function validarAcesso(ag, num, pass) {
    if (ag === conta.agencia && num === conta.numero && pass === conta.senha) {
        return true;
    } else {
        return false;
    }
}

// ======================================
// FUNÇÃO: MOSTRAR SALDO
// ======================================
function mostrarSaldo() {
    return "Saldo atual: R$ " + conta.saldo;
}

// ======================================
// FUNÇÃO: REALIZAR SAQUE
// ======================================
function sacar(valor) {
    if (valor <= 0) {
        return "Valor inválido!";
    }

    if (valor > conta.saldo) {
        return "Saldo insuficiente!";
    }

    if (valor % 10 !== 0) {
        return "Valor inválido para saque. O valor deve ser múltiplo de 10.";
    }

    // Atualiza o saldo
    conta.saldo -= valor;

    // Cálculo de cédulas
    var restante = valor;
    var notas100 = Math.floor(restante / 100);
    restante = restante % 100;

    var notas50 = Math.floor(restante / 50);
    restante = restante % 50;

    var notas20 = Math.floor(restante / 20);
    restante = restante % 20;

    var notas10 = Math.floor(restante / 10);
    restante = restante % 10;

    // Registrar no histórico
    conta.historico.push("Saque de R$ " + valor);

    // Montar retorno
    var resultado = "Saque realizado com sucesso!\n\nNotas entregues:\n";
    if (notas100 > 0) resultado += notas100 + " nota(s) de 100\n";
    if (notas50 > 0) resultado += notas50 + " nota(s) de 50\n";
    if (notas20 > 0) resultado += notas20 + " nota(s) de 20\n";
    if (notas10 > 0) resultado += notas10 + " nota(s) de 10\n";

    return resultado;
}

// ======================================
// FUNÇÃO: MOSTRAR HISTÓRICO
// ======================================
function mostrarHistorico() {
    if (conta.historico.length === 0) {
        return "Nenhuma operação realizada ainda.";
    }

    var texto = "Histórico de operações:\n";
    for (var i = 0; i < conta.historico.length; i++) {
        texto += (i + 1) + " - " + conta.historico[i] + "\n";
    }
    return texto;
}

// ======================================
// MENU INTERATIVO
// ======================================
var opcao;

do {
    console.log("\n=== CAIXA ELETRÔNICO ===");
    console.log("1 - Acessar conta");
    console.log("2 - Consultar saldo");
    console.log("3 - Realizar saque");
    console.log("4 - Ver histórico");
    console.log("0 - Sair");

    opcao = Number(rs.question("Escolha uma opcao: "));

    console.log(); // linha em branco

    switch (opcao) {
        case 1:
            var ag = rs.question("Digite a agência: ");
            var num = rs.question("Digite o número da conta: ");
            var pass = rs.question("Digite a senha: ");

            if (validarAcesso(ag, num, pass)) {
                acessoPermitido = true;
                console.log("\nAcesso permitido! Bem-vindo.");
            } else {
                acessoPermitido = false;
                console.log("\nDados inválidos. Acesso negado.");
            }
            break;

        case 2:
            if (!acessoPermitido) {
                console.log("É necessário acessar a conta primeiro.");
            } else {
                console.log(mostrarSaldo());
            }
            break;

        case 3:
            if (!acessoPermitido) {
                console.log("É necessário acessar a conta primeiro.");
            } else {
                var valorSaque = Number(rs.question("Digite o valor para saque: "));
                console.log("\n" + sacar(valorSaque));
                console.log("\n" + mostrarSaldo());
            }
            break;

        case 4:
            if (!acessoPermitido) {
                console.log("É necessário acessar a conta primeiro.");
            } else {
                console.log(mostrarHistorico());
            }
            break;

        case 0:
            console.log("Encerrando o sistema. Até logo!");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== 0);
