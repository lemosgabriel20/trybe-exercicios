const numeroAleatorio = () => Math.random();
  
console.log(numeroAleatorio());

const hello = nome => `Olá, ${nome}!`;
  
let nome = 'Ivan';
console.log(hello(nome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
  
nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));