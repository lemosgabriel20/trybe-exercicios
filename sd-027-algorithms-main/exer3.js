// 3 - Desenvolva um algoritmo que simule o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let options = ["pedra","papel","tesoura"];
let player_one = "";
let player_two = "";

let index_one = Math.floor(Math.random() * 3);
let index_two = Math.floor(Math.random() * 3);

player_one = options[index_one];
player_two = options[index_two];

console.log("Player 1 > " + player_one)
console.log("Player 2 > " + player_two)

if(player_one == player_two)
    console.log("A Ties");

else if ( (player_one == "papel" && player_two == "pedra") || (player_one == "pedra" && player_two == "tesoura") || (player_one == "tesoura" && player_two == "papel"))
    console.log("Player 1 won");

else if ( (player_two == "papel" && player_one == "pedra") || (player_two == "pedra" && player_one == "tesoura") || (player_two == "tesoura" && player_one == "papel"))
    console.log("Player 2 won");