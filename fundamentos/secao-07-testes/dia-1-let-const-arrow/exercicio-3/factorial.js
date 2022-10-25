const factorial = x => x < 1 ? 1 : x * factorial(x - 1);
const result = factorial(6);
console.log(`Esse é o fatorial ${result}`);