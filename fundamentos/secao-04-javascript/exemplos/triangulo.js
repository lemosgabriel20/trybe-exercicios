const a = 60;
const b = 40;
const c = 80;

function isTriangle(a,b,c){
    return typeof(a+b+c) != "number" || a < 0 || b < 0 || c < 0 ? "invalid angle!" : (a+b+c === 180 ? true : false);
}

console.log(isTriangle(a,b,c));