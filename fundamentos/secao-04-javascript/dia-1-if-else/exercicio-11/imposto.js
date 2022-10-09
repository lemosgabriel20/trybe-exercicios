const salarioBruto = 3000;

let aliquotaINSS = null;
let aliquotaIR = null;
let parcelaIR = null;
let salarioLiq = null;

// INSS
if (salarioBruto <= 1556.94) {
    aliquotaINSS = 8/100;
    salarioLiq = salarioBruto - (salarioBruto * aliquotaINSS);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 9/100;
    salarioLiq = salarioBruto - (salarioBruto * aliquotaINSS);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 11/100;
    salarioLiq = salarioBruto - (salarioBruto * aliquotaINSS);
} else {
    aliquotaINSS = 570.88
    salarioLiq = salarioBruto - aliquotaINSS;
}

// IR
if (salarioLiq >= 1903.99 && salarioLiq <= 2826.65) {
    aliquotaIR = 7.5/100;
    parcelaIR = 142.80;
    salarioLiq = salarioLiq - ((salarioLiq * aliquotaIR) - parcelaIR);
} else if (salarioLiq >= 2826.66 && salarioLiq <= 3751.05) {
    aliquotaIR = 15/100;
    parcelaIR = 354.80;
    salarioLiq = salarioLiq - ((salarioLiq * aliquotaIR) - parcelaIR);
} else if (salarioLiq >= 3751.06 && salarioLiq <= 4664.68) {
    aliquotaIR = 22.5/100;
    parcelaIR = 636.13;
    salarioLiq = salarioLiq - ((salarioLiq * aliquotaIR) - parcelaIR);
} else {
    aliquotaIR = 27.5/100;
    parcelaIR = 869.36;
    salarioLiq = salarioLiq - ((salarioLiq * aliquotaIR) - parcelaIR);
}

// Salario Liquido
console.log("Salário Bruto: R$ " + salarioBruto);
console.log("Salário Liquído: R$ " + salarioLiq);