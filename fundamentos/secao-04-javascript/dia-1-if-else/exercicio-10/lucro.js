const valorCusto = 100;
const impostoSobreOCusto = (20/100) * valorCusto;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorVenda = 150;
const quantidade = 1000;
let lucro = (valorVenda * quantidade) - (valorCustoTotal * quantidade);

console.log("Custo");
console.log("------------------");
console.log("Valor de custo: R$ " + valorCusto);
console.log("Valor de custo x" + quantidade + ": R$ " + valorCusto * quantidade);
console.log("Valor de custo total (imposto ativo) x1000: R$ " + valorCustoTotal * quantidade);

console.log('\n');
console.log("Venda");
console.log("------------------");
console.log("Valor de venda: R$ " + valorVenda);
console.log("Valor de venda x" + quantidade + ": R$ " + valorVenda * quantidade);

console.log('\n');
console.log("Lucro");
console.log("------------------");
console.log("R$ " + lucro);
