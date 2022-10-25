// Ao chamar a função doingThings:
const wakeUp = () => "Acordando!!";
const coffeTime = () => "Bora tomar café!!";
const goodNight = () => "Partiu dormir!!";

const doingThings = (action) => {
    console.log(action());
}

doingThings(coffeTime);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!