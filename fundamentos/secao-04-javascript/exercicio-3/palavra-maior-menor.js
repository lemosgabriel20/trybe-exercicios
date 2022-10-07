let array = ['java', 'javascript', 'python', 'html', 'css'];
let lengths = [];

for (let i = 0; i < array.length; i += 1) {
    lengths.push(array[i].length);
}

let max = Math.max(...lengths);
let min = Math.min(...lengths);

let biggestWord = lengths.indexOf(max);
biggestWord = array[biggestWord];

let smallestWord = lengths.indexOf(min);
smallestWord = array[smallestWord];

console.log("Maior palavra > " + biggestWord);
console.log("Menor palavra > " + smallestWord);