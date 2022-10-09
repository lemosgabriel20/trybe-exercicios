let array = [2, 3, 6, 7, 10, 1];

function biggestIndex(array) {
    return array.indexOf(Math.max(...array));
}

let index = biggestIndex(array);
console.log(index);