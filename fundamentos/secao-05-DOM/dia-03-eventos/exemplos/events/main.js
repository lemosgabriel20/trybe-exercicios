const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
myWebpage.style.color = "white";

const container = document.querySelector('ul');
const allLi = document.getElementsByTagName('li');

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// RESPOSTA - Por causa da propriedade transform.


// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?



for (let i = 0; i < allLi.length; i += 1) {
    allLi[i].addEventListener('click',toggleStates);
}

function toggleStates(event) {
    for (let i = 0; i < allLi.length; i += 1) {
        if (allLi[i].id === event.target.id) {
            allLi[i].classList.toggle("tech");
            input.addEventListener("change", textChange);
        } else {
            allLi[i].classList.remove("tech");
        }
    }
}


// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function textChange() {
    console.log(input.value);
    for (let i = 0; i < allLi.length; i += 1) {
        if (allLi[i].classList.contains("tech")) {
            allLi[i].innerText = input.value;
        }
    }
    
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', redirect);

function redirect() {
    let url = "https://www.google.com.br";
    window.location = url;
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', hoverMouse);
function hoverMouse(event) {
    let color = event.target.style.color;
    if (color === "white") {
        event.target.style.color = "red";
    } else {
        event.target.style.color = "white";
    }
}
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.