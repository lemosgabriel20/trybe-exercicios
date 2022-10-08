let n = 5;
let str = '';

if (n > 1) {
    for (let i = 1; i <= n; i += 1) {
        str += '*';
    }
    for (let i = 1; i <= n; i += 1) {
        console.log(str);
    }
} else {
    console.log("n menor que 1");
}