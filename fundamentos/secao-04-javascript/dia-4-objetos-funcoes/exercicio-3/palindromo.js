function toReverse(word) {
    let array = [];
    for (let i = 0; i < word.length; i += 1) {
        array.push(word[i]);
    }
    word = array.reverse();
    word = word.join('');
    return word;
}

function verificaPalindrome(original, reversed) {
    if (reversed === original) {
        return true;
    } else {
        return false;
    }
}

let original = 'arara'
console.log(original);
let reversed = toReverse(original);
console.log(reversed);
let palindrome = verificaPalindrome(original, reversed);
console.log(palindrome);