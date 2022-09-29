// removeChild(element);
// element.remove().
const pai = document.getElementById("pai");
const childrenPai = pai.children;
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const quartoEUltimoFilho = document.getElementById("quartoEUltimoFilho");


for (let i = 0; i < childrenPai.length; i += 1) {
    if (childrenPai[i].getAttribute('id') !== 'elementoOndeVoceEsta') {
        pai.removeChild(childrenPai[i]);
    }
}
pai.removeChild(quartoEUltimoFilho);
elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.lastElementChild);
