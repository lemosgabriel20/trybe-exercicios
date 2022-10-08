let n = 7;
let strPerLine = '';
let muchSpc = 0;

for (let i = 1, foo = n-1; i < n; i += 2, foo -= 1) {
    muchSpc = n - foo;
}

for (let i = 0 ,spc = muchSpc, ast = 1; i < n; i += 2, ast += 2, spc -= 1) {
    strPerLine = '';
    
    for (let k = spc; k >= 0; k -= 1){
        strPerLine += ' ';
    }
    
    for (let k = 1; k <= ast; k += 1){
        strPerLine += ' ';
    }
    console.log(strPerLine);
}