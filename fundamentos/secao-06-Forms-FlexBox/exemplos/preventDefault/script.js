// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


INPUT_TEXT.addEventListener('keypress', event => {
    if (event.key != 'a') {
        event.preventDefault();
    }
});

INPUT_CHECKBOX.addEventListener('click', event => {
    event.preventDefault();
});

HREF_LINK.addEventListener('click', event => {
    event.preventDefault();
});