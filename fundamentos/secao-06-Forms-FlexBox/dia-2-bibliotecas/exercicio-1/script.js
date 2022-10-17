SUBMIT_BUTTON = document.querySelector('#submit-button');

PICTURE_AGREE_BOX = document.querySelector('#image-agree');
FILE_INPUT = document.querySelector('#pictures');
NAME_INPUT = document.querySelector('#input-name');
EMAIL_INPUT = document.querySelector('#input-email');
ALL_INPUTS = document.querySelectorAll('input');

let dt = new Date();
DATE_INPUT = document.querySelector('#input-date').DatePickerX.init({
    minDate: dt,
    maxDate: new Date(2022, 11, 25),
    format: 'dd/mm/yyyy',
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    todayButtonLabel: 'Hoje',
    clearButtonLabel: 'Limpar',
});

const nameMaxLength = NAME_INPUT.getAttribute('maxlength');
const nameMinLength = NAME_INPUT.getAttribute('minlength');
const emailMaxLength = EMAIL_INPUT.getAttribute('maxlength');
const emailMinLength = EMAIL_INPUT.getAttribute('minlength');

/*SUBMIT_BUTTON.addEventListener('click', event => {
    event.preventDefault();
    if (EMAIL_INPUT.value.length < emailMinLength || NAME_INPUT.value.length < nameMinLength) {
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
})*/

PICTURE_AGREE_BOX.addEventListener('click', event => {
    if (event.target.checked) {
        FILE_INPUT.removeAttribute('disabled');
    } else {
        FILE_INPUT.setAttribute('disabled', '');
    }
})
