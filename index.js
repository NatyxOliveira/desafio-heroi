const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRanked(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 100 && vitorias <= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso
rl.question('Digite a quantidade de vitórias: ', function(vit) {
    rl.question('Digite a quantidade de derrotas: ', function(der) {
        const resultado = calcularRanked(parseInt(vit), parseInt(der));
        console.log('O Herói tem um saldo de ' + resultado.saldoVitorias + ' e está no nível de ' + resultado.nivel);
        rl.close();
    });
});
