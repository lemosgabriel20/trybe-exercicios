let space = ' ';
let asterisc = '*';
let strPerLine = '';
let n = 5;

for (let i = 0, spc = 4, ast = 1; i < n; i += 1, spc -= 1, ast += 1) {
    strPerLine = '';
    for (let k = spc; k >= 0; k -= 1){
        strPerLine += space;
    }

    for (let k = 1; k <= ast; k += 1){
        strPerLine += asterisc;
    }

    console.log(strPerLine);
}



/*
n = 5

    *   spc[4] ast[1]
   **   spc[3] ast[2]
  ***   spc[2] ast[3]
 ****   spc[1] ast[4]
*****   space[0] ast[5]


*/