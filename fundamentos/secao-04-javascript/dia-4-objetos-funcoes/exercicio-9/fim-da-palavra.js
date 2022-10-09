let word = 'joaofernando';
let ending = 'fernan';

function verificaFimPalavra(word, ending) {
    let wordLength = word.length-1;
    let verify = 0;

    if (word.length >= ending.length) {
      for (let i = ending.length-1; i >= 0; i -= 1) {
          if (ending[i] === word[wordLength]) {
              verify += 1;
          }
          wordLength -= 1;
      }

      if (verify === ending.length) {
          return true;
      } else {
          return false;
      }
    } else {
        return false;
    }
}

console.log(word);
console.log(ending);

let verify = verificaFimPalavra(word, ending);
console.log(verify);