let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function biggestName(array) {
    let list = [];
    for (let i = 0; i < array.length; i += 1) {
        list.push(array[i].length-1);
    }
    let index = list.indexOf(Math.max(...list));
    return array[index];
}
let name = biggestName(array);
console.log(name);