const pai = document.getElementById("pai");
pai.appendChild(document.createElement('section'));

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
elementoOndeVoceEsta.appendChild(document.createElement('p'));

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filho = primeiroFilhoDoFilho.appendChild(document.createElement('h1'));

const terceiroFilho = ((filho.parentElement).parentElement).nextElementSibling;
console.log(terceiroFilho);