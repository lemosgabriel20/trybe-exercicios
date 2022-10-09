let word = "banana";
let newWord = [];
for (let i = word.length-1; i >= 0; i -= 1) {
    newWord.push(word[i]);
}
newWord = newWord.join('');
console.log(newWord);