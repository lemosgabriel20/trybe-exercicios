const ouro = 3;

const resultadoLoteria = (ouro, checarIgualdade) => {
   const sorteado = Math.floor(Math.random() * (5 - 1 + 1) + 1);
   console.log(sorteado)
   return checarIgualdade(ouro, sorteado);
};

console.log(resultadoLoteria(ouro, (ouro, sorteado) => {
    if (sorteado === ouro) {
        return 'Parabéns você ganhou';
    } else {
        return 'Tente novamente';
    }
}))