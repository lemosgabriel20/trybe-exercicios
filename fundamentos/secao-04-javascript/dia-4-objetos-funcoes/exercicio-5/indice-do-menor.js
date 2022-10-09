let array = [2, 4, 6, 7, 10, 0, -3];

function smallestIndex(array) {
    return array.indexOf(Math.min(...array));
}

let index = smallestIndex(array);
console.log(index);