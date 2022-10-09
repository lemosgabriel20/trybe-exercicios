/*const romanos = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    VIX: 9,
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    LX: 60,
    LXX: 70,
    LXXX: 80,
    XC: 90,
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    DC: 600,
    DCC: 700,
    DCCC: 800,
    CM: 900,
    M: 1000,
}*/

const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

let string = "DLXM";

function toDecimal(string) {
    let decimal = 0;
    for (let i = 0; i < string.length; i += 1) {
        temp = 0;
        if (i+1 != string.length) {
            if (romanos[string[i]] >= romanos[string[i+1]]) {
                temp += romanos[string[i]] + romanos[string[i+1]];
            } else if (romanos[string[i]] < romanos[string[i+1]]){
                temp += romanos[string[i]] - romanos[string[i+1]];
            }
        } else {
            temp += romanos[string[i]];
        }
        decimal += temp;
    }
    return decimal;
}

let n = toDecimal(string);
console.log(n);