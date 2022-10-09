let numbers = [1, 3, 2, 1, 2, 2, 1];

function mostOccuredNumber(array) {
    let list = []
    for (let i = 0; i < array.length; i += 1) {
        list.push(0);
        for (let j = 0; j < array.length; j += 1) {
            if (array[i] === array[j]) {
                list[i] += 1;
            }
        }
    }
    let index = list.indexOf(Math.max(...list));
    return array[index];
}

let n = mostOccuredNumber(numbers);
console.log(n);