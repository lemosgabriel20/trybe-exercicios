let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let median = 0;
let biggest = 0;

for(let i = 0; i < numbers.length; i+=1)
{
    sum += numbers[i];
    if(numbers[i] > biggest)
        biggest = numbers[i];
    console.log(numbers[i]);
}

median = sum/numbers.length;

if(median > 20)
    console.log("Valor maior que 20");
else if (median <= 20)
    console.log("Valor menor ou igual a 20");

console.log("Soma > " + sum);
console.log("Média aritmética > " + median);
console.log("Maior valor > " + biggest);