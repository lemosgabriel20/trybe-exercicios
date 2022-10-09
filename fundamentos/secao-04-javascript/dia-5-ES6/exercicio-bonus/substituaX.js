let nome = 'Gabriel';

const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    return frase.split('x').join(nome);
}

const minhasSkills = frase => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let fraseFinal = 
      `${frase}
       Minhas três principais habilidades são:
       ${skills}
      `;
    return fraseFinal;
}

console.log(minhasSkills(substituaX(nome)));