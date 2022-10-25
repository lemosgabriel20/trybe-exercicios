const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = numbers => {
   let min = null;
   let index = null;
   const length = numbers.length;
   const array = [];
   
   for (let i = 0; i < length; i += 1) {
       min = Math.min(...numbers);
       array.push(min);
       index = numbers.indexOf(min);
       numbers.splice(index, 1);
   }

   return array;
}
// Seu código aqui.
const ordenados = sortOddsAndEvens(oddsAndEvens);
console.log(`Os números ${ordenados.join(',')} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉