let numbers = [];
let primes = [];
for (let i = 2; i <= 50; i += 1) {
    numbers.push(i);    
}

for (let i = 0; i < 48; i += 1) {
    if(numbers[i]%2!==0 && numbers[i]%3 !==0 && numbers[i]%7 !== 0) {
        primes.push(numbers[i]);
    }
    if(numbers[i] == 2 || numbers[i] == 3 || numbers[i] == 7) {
        primes.push(numbers[i]);
    }
}

console.log(primes)