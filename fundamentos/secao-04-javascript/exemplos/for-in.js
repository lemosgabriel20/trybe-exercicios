let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

console.log("\n");

for(let index in names)
{
    console.log("Olá",names[index]);
}

console.log("\n");

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
for(let key in car)
{
    console.log(key,car[key]);
}


console.log("\n");