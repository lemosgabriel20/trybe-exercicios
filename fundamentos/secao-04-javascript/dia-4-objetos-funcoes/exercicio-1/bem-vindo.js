let margarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let patinhas = {
    personagem: 'Tio Patinhas',
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

console.log("Bem-vinda, " + margarida.personagem);

margarida['recorrente'] = 'Sim'
console.log(margarida.recorrente);

console.log('\n');

for (let key in margarida) {
    console.log(key);
}

console.log('\n');

for (let key in margarida) {
    console.log(margarida[key]);
} 

console.log('\n');

for (let key in margarida) {
    if (key === 'recorrente') {
        console.log('Ambos recorrentes');
    } else {
        console.log(margarida[key] + ' e ' + patinhas[key]);
    }
}