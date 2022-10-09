const a = -10;

function isSigned(a){
    return 0 < a ? "positive" : (0 > a ? "negative" : "zero");
}

console.log(isSigned(a));