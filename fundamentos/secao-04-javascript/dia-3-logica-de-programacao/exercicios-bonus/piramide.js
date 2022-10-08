

/*
n = 5

lines 3
  *    spc = 2  ast = 1  5 - 3 = 2
 ***    spc = 1 ast = 3  5 - 4 = 1
*****  spc = 0  ast = 5

ast = ast + 2
spc = spc - 1

    *     10 - 6 = 4
   ***    10 - 7 = 3
  *****   10 - 8 = 2
 *******  10 - 9 = 1
********* 

n - (n-1) 


   *    7 - 4 = 3
  ***    7 - 5  = 2
 *****    7 - 6 = 1
*******


lines = total_spc

*/

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
        strPerLine += '*';
    }
    console.log(strPerLine);
}