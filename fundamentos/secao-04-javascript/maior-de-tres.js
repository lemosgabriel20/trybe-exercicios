const a = 512;
const b = 433;
const c = 99;

function biggerThan(a,b,c){
    return (a < b) ? (c < b ? b : c) : (c < a ? a : c);
}

console.log(biggerThan(a,b,c));