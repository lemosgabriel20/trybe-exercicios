let numbers = [5, 9, 1, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let median = 0;
let biggest = 0;
let smallest = 0;
let odds = 0;

for (let i = 0; i < numbers.length; i+=1)
{
    sum += numbers[i];
    if (numbers[i] > biggest)
        biggest = numbers[i];
        
    if (numbers[i]%3 === 0) {
        odds += 1;
    }
}


smallest = biggest;
for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] < smallest)
        smallest = numbers[i];
}


median = sum/numbers.length;

if (median > 20)
    console.log("Valor maior que 20");
else if (median <= 20)
    console.log("Valor menor ou igual a 20");

console.log("Soma > " + sum);
console.log("Média aritmética > " + median);
console.log("Maior valor > " + biggest);
console.log("Menor valor > " + smallest);

if (odds <= 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("Quantidade de impares > " + odds);
}


let newArray = [];
let divisonArray = [];
for (let i = 1; i <= 25; i += 1) {
    newArray.push(i);
    divisonArray.push(i/2);
}

console.log(newArray);
console.log(divisonArray);