// 5 - Desenvolva um algoritmo que recebe a idade de 3 pessoas e imprime quem é a pessoa mais nova. Exiba o resultado no seguinte formato:
// "Pessoa" é a pessoa mais nova.

let ages = [40,35,1];
let youngest = 0;

for(let i = 0; i < ages.length; i++)
{
    if(youngest > ages[i])
        youngest = ages[i];
}
console.log("A idade mais nova é " + youngest);