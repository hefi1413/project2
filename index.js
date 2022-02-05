
/*
Projeto 02

O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, 
você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.

- Pedra ganha da tesoura, mas perde para o papel;
- Tesoura ganha do papel, mas perde para a pedra;
- Papel ganha da pedra, mas perde para a tesoura.

E para esse projeto você deve desenvolver um programa capaz de :

- Receber o elemento escolhido pelo usuário;
- Escolher um elemento aleatório para o computador;
- Comparar os dois elementos e declarar um vencedor.
*/

var prompt = require('prompt-sync')();

// constantes 
const JOGADOR1_ROUNDS = 0;
const JOGADOR2_ROUNDS = 1;
const EMPATE_ROUNDS = 2;

// variáveis
let jogo_elementos = ['pedra', 'tesoura', 'papel'];
let jogo_rounds = [];
let jogo_continuar = true;

console.log();
console.log();
console.info('Jokenpô ');

while (jogo_continuar) {

    console.info('--------------------------');
    console.info('[1]- Pedra ganha da tesoura, mas perde para o papel');
    console.info('[2]- Tesoura ganha do papel, mas perde para a pedra');
    console.info('[3]- Papel ganha da pedra, mas perde para a tesoura');
    console.log();

    let rounds = +prompt('Rounds .......:');
    let jogador1 = 1;   // jopgador 1 = usuário
    let jogador2 = 2;   // jogador 2 = computador

    jogo_rounds[JOGADOR1_ROUNDS] = 0;
    jogo_rounds[JOGADOR2_ROUNDS] = 0;
    jogo_rounds[EMPATE_ROUNDS] = 0;

    while (rounds >= 1) {

        console.log();

        jogador1 = +prompt('Jogador 1 ....:');
        if (jogador1 < 1 || jogador1 > 3) {
            console.log();
            console.info('Jogada inválida!!!');
            continue;
        }
        console.log('Jogador 1 ....:', jogo_elementos[jogador1 - 1]);

        // jogada do computador
        jogador2 = getRandom(1, 4);

        console.log('Jogador 2 ....:', jogador2);
        console.log('Jogador 2 ....:', jogo_elementos[jogador2 - 1]);
        console.log();

        // verifica jogador 1
        if (jogador1 == 1 && jogador2 == 2) {
            console.info("Jogador 1 venceu !!!");
            jogo_rounds[JOGADOR1_ROUNDS] += 1;
        }
        else if (jogador1 == 2 && jogador2 == 3) {
            console.info("Jogador 1 venceu !!!");
            jogo_rounds[JOGADOR1_ROUNDS] += 1;
        }
        else if (jogador1 == 3 && jogador2 == 1) {
            console.info("Jogador 1 venceu !!!");
            jogo_rounds[JOGADOR1_ROUNDS] += 1;
        }

        // verifica jogador 2
        else if (jogador2 == 1 && jogador1 == 2) {
            console.info("Jogador 2 venceu !!!");
            jogo_rounds[JOGADOR2_ROUNDS] += 1;
        }
        else if (jogador2 == 2 && jogador1 == 3) {
            console.info("Jogador 2 venceu !!!");
            jogo_rounds[JOGADOR2_ROUNDS] += 1;
        }
        else if (jogador2 == 3 && jogador1 == 1) {
            console.info("Jogador 2 venceu !!!");
            jogo_rounds[JOGADOR2_ROUNDS] += 1;
        }

        // nenhum venceu
        else {
            console.info("Empatou ");
            jogo_rounds[EMPATE_ROUNDS] += 1;
        };
        // decrementa a  rodada
        rounds--;
    }
    console.log();
    console.log('Resultado ');
    console.info('--------------------------');
    console.log('Jogador 1 ...', jogo_rounds[JOGADOR1_ROUNDS]);
    console.log('Jogador 2 ...', jogo_rounds[JOGADOR2_ROUNDS]);
    console.log('Emaptes .....', jogo_rounds[EMPATE_ROUNDS]);

    if (jogo_rounds[JOGADOR1_ROUNDS] > jogo_rounds[JOGADOR2_ROUNDS]) {
        console.log('Jogador 1 é o CAMPEÃO !!! ');
    }
    else if (jogo_rounds[JOGADOR2_ROUNDS] > jogo_rounds[JOGADOR1_ROUNDS]) {
        console.log('Jogador 2 é o CAMPEÃO !!! ');
    }
    else {
        console.log('O jogo EMPATOU !!! ');
    }
    console.log();

    let result = prompt('Sair do jogo ? (sair=S):');

    jogo_continuar = (result.toLowerCase() != 's')
};
console.log();

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}