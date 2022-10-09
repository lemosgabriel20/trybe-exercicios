let n = 5;

function somatorio(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 1) {
        sum += i;
    }
    return sum;
}


let sum = somatorio(n);

if (n > 0) {
    console.log(sum);
} else {
    console.log("ERRO! Número negativo!");
}