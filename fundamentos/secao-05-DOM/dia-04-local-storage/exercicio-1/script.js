// Input
const backgroundColorInput = document.querySelector('#backgroundColor');
const textColorInput       = document.querySelector('#textColor');
const fontSizeInput        = document.querySelector('#fontSize');
const lineSpacingInput     = document.querySelector('#lineSpacing');
const fontFamilyInput      = document.querySelector('#fontFamily');

let defaultBGColor = backgroundColorInput.value;
let defaultTextColor = textColorInput.value;
let defaultFontSize = fontSizeInput.value;
let defaultLineSpace = lineSpacingInput.value;
let defaultFontFamily = fontFamilyInput.value;
// Content
const page = document.querySelector('#content-container');
const text = document.querySelector('#content-text');

const changeBackgroundColor = event => {
    const options = event.target.options;
    page.style.backgroundColor = event.target.value;
    defaultBGColor = event.target.value;
    updateOptions(backgroundColorInput, defaultBGColor);
    updateStorage('backgroundColor', defaultBGColor);
}

const changeTextColor = event => {
    const options = event.target.options;
    text.style.color = event.target.value;
    defaultTextColor = event.target.value;
    updateOptions(textColorInput, defaultTextColor);
    updateStorage('textColor', event.target.value);
}

const changeFontSize = event => {
    const options = event.target.options;
    text.style.fontSize = event.target.value;
    defaultFontSize = event.target.value;
    updateOptions(fontSizeInput, defaultFontSize);
    updateStorage('fontSize', event.target.value);
}

const changeLineSpace = event => {
    const options = event.target.options;
    text.style.lineHeight = event.target.value;
    defaultLineSpace = event.target.value;
    updateOptions(lineSpacingInput, defaultLineSpace);
    updateStorage('lineSpace', event.target.value);
}

const changeFontFamily = event => {
    const options = event.target.options;
    text.style.fontFamily = event.target.value;
    defaultFontFamily = event.target.value;
    updateOptions(fontFamilyInput, defaultFontFamily);
    updateStorage('fontFamily', event.target.value);
}


backgroundColorInput.addEventListener('change', changeBackgroundColor);
textColorInput.addEventListener('change', changeTextColor);
fontSizeInput.addEventListener('change', changeFontSize);
lineSpacingInput.addEventListener('change', changeLineSpace);
fontFamilyInput.addEventListener('change', changeFontFamily);

const initializeStorage = () => {
    if (localStorage.getItem('backgroundColor') == null) {
        localStorage.setItem('backgroundColor', JSON.stringify(defaultBGColor));
    } else {
        defaultBGColor = JSON.parse(localStorage.getItem('backgroundColor'));
    }

    if (localStorage.getItem('textColor') == null) {
        localStorage.setItem('textColor', JSON.stringify(defaultTextColor));
    } else {
        defaultTextColor = JSON.parse(localStorage.getItem('textColor'));
    }

    if (localStorage.getItem('fontSize') == null) {
        localStorage.setItem('fontSize', JSON.stringify(defaultFontSize));
    } else {
        defaultFontSize = JSON.parse(localStorage.getItem('fontSize'));
    }

    if (localStorage.getItem('lineSpace') == null) {
        localStorage.setItem('lineSpace', JSON.stringify(defaultLineSpace));
    } else {
        defaultLineSpace = JSON.parse(localStorage.getItem('lineSpace'));
    }

    if (localStorage.getItem('fontFamily') == null) {
        localStorage.setItem('fontFamily', JSON.stringify(defaultFontFamily));
    } else {
        defaultFontFamily = JSON.parse(localStorage.getItem('fontFamily'));
    }
}

const updateStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const updateOptions = (selection, value) => {
    const options = selection.options;
    for (let i = 0; i < options.length; i+= 1) {
        if (options[i].value == value) {
            selection.options[i].setAttribute('selected', '');
        } else {
            selection.options[i].removeAttribute('selected');
        }
    }
}

window.onload = () => {
    initializeStorage();

    page.style.backgroundColor = defaultBGColor;
    updateOptions(backgroundColorInput, defaultBGColor);

    text.style.color = defaultTextColor;
    updateOptions(textColorInput, defaultTextColor);

    text.style.fontSize = defaultFontSize;
    updateOptions(fontSizeInput, defaultFontSize);

    text.style.lineHeight = defaultLineSpace;
    updateOptions(lineSpacingInput, defaultLineSpace);

    text.style.fontFamily = defaultFontFamily;
    updateOptions(fontFamilyInput, defaultFontFamily);
}

// Update selected
// Salvar selected
// Recuperar selected