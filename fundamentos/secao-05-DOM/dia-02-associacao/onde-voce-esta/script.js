/*
parentNode: retorna o nó pai.

parentElement: retorna o elemento pai.

childNodes: retorna um NodeList com todos os nós filhos.

children: retorna um HTMLCollection com todos os elementos filhos.

firstChild: retorna o primeiro nó filho.

firstElementChild: retorna o primeiro elemento filho.

lastChild: retorna o último nó filho.

lastElementChild: retorna o último elemento filho.

nextSibling: retorna o próximo nó.

nextElementSibling: retorna o próximo elemento.

previousSibling: retorna o nó anterior.

previousElementSibling: retorna o elemento anterior.
*/

const ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
ondeVoceEsta.parentElement.style.color = "red";

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "Hello Filho do Filho!";

let primeiroFilho = document.getElementById("pai").firstElementChild;
console.log(primeiroFilho);

primeiroFilho = ondeVoceEsta.previousElementSibling;
console.log(primeiroFilho);

const atencao = ondeVoceEsta.nextSibling;
console.log(atencao);

let terceiroFilho = ondeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

terceiroFilho = document.getElementById("pai").children[2];
console.log(terceiroFilho);