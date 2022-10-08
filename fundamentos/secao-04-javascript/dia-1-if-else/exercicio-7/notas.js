let nota = -949;
let letra = '';

if (nota < 0 || nota > 100) {
    console.log("Error");
} else if (nota >= 90) {
    letra = 'A';
} else if (nota >= 80) {
    letra = 'B';
} else if (nota >= 70) {
    letra = 'C';
} else if (nota >= 60) {
    letra = 'D';
} else if (nota >= 50) {
    letra = 'E';
} else {
    letra = 'F';
}
console.log("Nota: " + letra);



