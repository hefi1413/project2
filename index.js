
<<<<<<< HEAD
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
let jogo_jogador1 = 0;
let jogo_jogador2 = 1;
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
=======

var prompt =require('prompt-sync')();

let history =
        `   Se voce esta desempregado, ja tem +30 e/ou problemas na área da sáude , certamente esta se sentindo por baixo, desmotivado e inseguro.

            Contudo, você ainda sonha com uma residência em um bairro tranquilo , uma boa renda por mês e uma família sob sua responsabilidade ... 

            Mas, como conseguir meterializar estes sonhos na atual realidade ?

            Então, ainda com estas questões em mente, vc abre seu cliente de email e percebe que irá ocorrer um concurso público e que será uma ótima opção para você.

            Isso mesmo !!! vc exclama. Essa é minha oportunidade!  
    
            Dessa maneira, já decidido, vc começa a se aplicar para passar no concurso, se tornar um servidor público e iniciar sua jornada. :)`;

    console.log();
    console.log();
    console.info( history );
    console.log();
    console.info("A Jornada do Herói");
    console.log("---------------------------");
    console.log();
    console.info("Segue abaixo 5 perguntas relacionadas ao seu planejamento de esctudo:");
    console.log();

    let quest1 = prompt("1- Você sabe que deverá investir uma grana para adiquirir um bom curso/apostila para treinar ?");
    let quest2 = prompt("2- Ja comprende que deverá utilizar alguma técnica de memorização para 1/5 de questões impossíveis de se lembrar ?");
    let quest3 = prompt("3- Entende que deverá montar um ciclo de estudo para as disciplinas envolvidas?");
    let quest4 = prompt("4- Tmabém sabe que deverá abdicar de passeios/descanços em alguns finais de semana ?");
    let quest5 = prompt("5- Por final, como um bom concurseiro, compreende que uma alimentação saudável também melhora sua concentração e aprendizado ?");

    var soma =0;
    if(quest1.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest2.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest3.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest4.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest5.toUpperCase()=="S" ) {
        soma += 1;
    }

    console.log();
    console.info('Resultado');
    console.log("---------------------------");

    if (soma == 0 ) {
        console.info("Você falha miseravelmente ...");
    }
    else if(soma==1 || soma==2 ) {
        console.info("Você falha ,mas consegue desfaçar.");
    }
    else if( soma == 3 ) {
        console.info("Você chega perto, mas falha por pouco");
    }
    else if( soma == 4 ) {
        console.info("Depois de muito esforço vc consegue seu objetivo, porém não de forma perfeita");
    }
    else if(soma == 5 ) {
        console.info("Você triunfa de forma inquestionavél e seus feitos serão lembrados por gerações !!");
    }
>>>>>>> 0fda704f6f8fe570dadbc7089225b9f3f88bb1e5
