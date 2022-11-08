const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  function authorBornIn1947() {
    // escreva aqui o seu código
   return books.find((book) =>{
    if (book.author.birthYear === 1947) {
        return book.author;
    }
   } )
  }

  function smallerName() {
    let nameBook;
    let smallest = 999;
    // escreva aqui o seu código
    books.forEach((book) => {
        
        if (smallest > book.name.length) {
            smallest = book.name.length;
            nameBook = book;
            
        } else {
            return nameBook;
        }
        
    })
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  })
}


function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book) => {
    const birth = book.author.birthYear;
    return birth > 1900 && birth < 2000;
  })
}

function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.some((book) => {
        return book.releaseYear >= 1980 && book.releaseYear <= 1989;
    })
}

function authorUnique() {
    // escreva seu código aqui
    const ages = []
    let bool = null;
    books.forEach((book) => {
        ages.push(book.author.birthYear);
    });
    books.forEach((book) => {
        let equals = 0;
        for (let i = 0; i < ages.length; i += 1) {
            if (ages[i] === book.author.birthYear) {
                equals += 1;
            }
        }
        if (equals >= 2) {
            bool = false;
        } else {
            bool = true;
        }
    })
    return bool; 
  }

//console.log(authorBornIn1947())
//console.log(smallerName())
//console.log(booksOrderedByReleaseYearDesc())
//console.log(everyoneWasBornOnSecXX())
//console.log(someBookWasReleaseOnThe80s())
console.log(authorUnique());