let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
};

let frase = 'O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ` se chama '` + leitor.livrosFavoritos[0].titulo + `'`;
console.log(frase);

let quantLivros = 0;

for (let i = 0; i < leitor.livrosFavoritos.length; i += 1) {
    quantLivros += 1;
}
frase = leitor.nome + ' tem ' + quantLivros + ' livros favoritos';
console.log(frase);