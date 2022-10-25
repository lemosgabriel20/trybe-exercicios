const newEmployees = (gerarDados) => {
    const employees = {
      id1: gerarDados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: gerarDados('Luiza Drumond '), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: gerarDados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees((nomeCompleto) => {
    return {
        nomeCompleto: nomeCompleto,
        email: `${nomeCompleto.replaceAll(' ','').toLowerCase()}@trybe.com`
    }
}))