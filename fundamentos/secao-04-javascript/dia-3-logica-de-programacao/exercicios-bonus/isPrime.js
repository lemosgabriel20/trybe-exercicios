const n = 18;
const limit = Math.sqrt(n);
// Fatores começa como 2 pois um número é sempre divisivel por ele mesmo e por 1
let factors = 2;

for (let i = 2; i <= limit; i += 1) {
    if(n%i === 0) {
        factors += 1;
    }
}

if (factors > 2) {
    console.log( n + " IS NOT PRIME!");
} else {
    console.log(n + " is prime!!");
}