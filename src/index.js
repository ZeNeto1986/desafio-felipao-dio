// Definindo as variáveis diretamente no código
let nomeHeroi = "Squall";
let xpHeroi = 3569;

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para classificar o nível do herói com base no XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 3000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 3001 && xpHeroi <= 4000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 4001 && xpHeroi <= 5500) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 5501 && xpHeroi <= 7000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 7001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
    nivelHeroi = "Radiante";
} else {
    nivelHeroi = "XP inválido";
}
// Utilizei if else como estrutura de decisão pois é a estrutura que permite uso de intervalos com valores "maior que", "menor que", "maior ou igual", "menor ou igual".
// O switch case tornaria o código mais complexo de ler e manter, ja o if else o torna mais legível, quando se trata de comparações e intervalos.
// OBS: alterei alguns valores de xpHeroi para aumentar o nivel de dificuldade de elevação de nível à medida que o nivel vai subindo.

// Exibe a mensagem com o nome e nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);