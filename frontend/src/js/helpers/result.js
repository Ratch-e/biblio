export const makeCity = city => {
  switch(city) {
    case 'Москва':
      return 'M.'

    case 'Санкт-Петербург':
      return 'СПб.'

    default:
      return city;
  }
}

export const getAuthors = authors => authors.map((author, key) =>
    authors.length - 1 === key ? 
    `${author.name[0]}.${author.middlename[0]}.${author.lastname}.` : 
    `${author.name[0]}.${author.middlename[0]}.${author.lastname}, `)

export const getFirstAuthor = (authors) => `${authors[0].lastname}, ${authors[0].name[0]}.${authors[0].middlename[0]}`