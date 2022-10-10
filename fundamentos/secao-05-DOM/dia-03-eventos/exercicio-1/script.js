function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  createDaysOfTheWeek();
  // Escreva seu código abaixo.


  // Criação de calendário
  const daysList = document.querySelector('#days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const day = document.createElement('li');
    day.classList.add('day');
    day.innerText = decemberDaysList[i];
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
      day.classList.add('holiday');
    }
    if (decemberDaysList[i] === 4  ||
        decemberDaysList[i] === 11 || 
        decemberDaysList[i] === 18 || decemberDaysList[i] === 25) {
        day.classList.add('friday');
    }
    daysList.appendChild(day);
  }

// Feriados
  const criarFeriados = (string) => {
    const btnContainer = document.querySelector('.buttons-container');
    const btn = document.createElement('button');
    btn.setAttribute('id','btn-holiday');
    btn.innerText = string;
    btnContainer.appendChild(btn);
  }
  criarFeriados('Feriados');
  let toggleHolidays = 0;

  const mudaFundoFeriados = () => {
    const holidays = document.querySelectorAll('.holiday');
      if (toggleHolidays === 0) {
        for (let i = 0; i < holidays.length; i += 1) {
          holidays[i].style.backgroundColor = 'white';
        }
        toggleHolidays = 1;
      } else {
          for (let i = 0; i < holidays.length; i += 1) {
          holidays[i].style.backgroundColor = 'rgb(238,238,238)';
          }
          toggleHolidays = 0;
        }
    } 
  
  const holidayBtn = document.querySelector('#btn-holiday');
  holidayBtn.addEventListener('click', mudaFundoFeriados);

  // Sextas-feiras
  const criarSextas = (string) => {
    const btnContainer = document.querySelector('.buttons-container');
    const btn = document.createElement('button');
    btn.setAttribute('id','btn-friday');
    btn.innerText = string;
    btnContainer.appendChild(btn);
  }
  criarSextas("Sexta-feira");

  let toggleFridays = 0;
  const fridayDays = [];
  const fridays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridays.length; i += 1) {
    fridayDays.push(fridays[i].innerText);
  }
  const mudaSextas = () => {
    const fridays = document.querySelectorAll('.friday');
      if (toggleFridays === 0) {
        for (let i = 0; i < fridays.length; i += 1) {
          fridays[i].innerText = 'SEXTOU!!\\o/';
        }
        toggleFridays = 1;
      } else {
          for (let i = 0; i < fridays.length; i += 1) {
            fridays[i].innerText = fridayDays[i];
          }
          toggleFridays = 0;
        }
    } 

  const fridayBtn = document.querySelector('#btn-friday');
  fridayBtn.addEventListener('click', mudaSextas);




// Zoom
const zoomIn = event => event.target.style.fontSize = '35px';

const zoomOut = event => event.target.style.fontSize = '20px';


const days = daysList.children;
let colorToUse = 'rgb(119,119,119)';

let toggleColor = 0;
const paintDay = event => {
  if (toggleColor === 0) {
    event.target.style.color = colorToUse;
    toggleColor = 1;
  } else {
    event.target.style.color = 'rgb(119,119,119)';
    toggleColor = 0;
  }
}


for (let i = 0; i < days.length; i += 1) {
  days[i].style.cursor = 'default';
  days[i].addEventListener('mouseenter', zoomIn);
  days[i].addEventListener('mouseleave', zoomOut);
  days[i].addEventListener('click', paintDay);
}


// Tarefas
const adicionarTarefa = string => {
  const myTasks = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerText = string;
  myTasks.appendChild(span);
}

adicionarTarefa('Cozinhar');

const descreverTarefa = color => {
  const myTasks = document.querySelector('.my-tasks');
  const div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = color;
  myTasks.appendChild(div);
}
descreverTarefa('green');

const taskColor = document.querySelector('.task');


const isTaskSelected = event => {
  event.target.classList.toggle('selected');
  if (event.target.classList.contains('selected')) {
    colorToUse = event.target.style.backgroundColor;
  }
}

taskColor.addEventListener('click', isTaskSelected);


// Compromissos
const input = document.querySelector('#task-input');
const addButton = document.querySelector('#btn-add');

const adicionarCompromisso = () => {
  const commitments = document.querySelector('#commitments');
  const li = document.createElement('li');
  li.innerText = input.value;
  commitments.appendChild(li);
} 

const enviarCompromisso = () => {
  if (input.value != '') {
    adicionarCompromisso()
    input.value = '';
  } else {
    alert('Erro! Compromisso inválido.');
  }
}

const pressKey = event => {
    let key = event.key;
    if (key == 'Enter') {
      enviarCompromisso();
    }
}

input.addEventListener('keyup', pressKey);
addButton.addEventListener('click', enviarCompromisso);