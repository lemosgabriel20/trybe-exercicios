let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let temp = 0;

console.log("Array original: " + numbers);
// Ordem crescente
for (let i = 0; i < numbers.length; i += 1) {
    for(let j = 0; j < numbers.length; j += 1){
        if (numbers[j] > numbers[j+1]) { 
            temp = numbers[j];              
            numbers[j] = numbers[j+1];        
            numbers[j+1] = temp;              
        }
    }
}
console.log("Bubble Sort crescente: " + numbers);

// Ordem decrescente
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    for(let j = 0; j < numbers.length; j += 1){
        if (numbers[j] < numbers[j+1]) { 
            temp = numbers[j];              
            numbers[j] = numbers[j+1];        
            numbers[j+1] = temp;              
        }
    }
}
console.log("Bubble Sort descrescente: " + numbers);

// Multiplicação subsequente
let multipliedArray = [];
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 == numbers.length) {
        multipliedArray.push(numbers[i] * 2);
    } else {
        multipliedArray.push(numbers[i] * numbers[i+1])
    }
    console.log(i);
}

console.log("Array multiplicada: " + multipliedArray);