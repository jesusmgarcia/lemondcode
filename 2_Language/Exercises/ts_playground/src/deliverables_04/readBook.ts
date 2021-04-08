interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {

  /*for (const book of books) {
    if (book.title == titleToSearch)
      return book.isRead;
  }

  return false;*/

  let bookRead = books.find(book => book.title == titleToSearch);

  if (bookRead === undefined) {
    return false;
  } else {
    return bookRead.isRead;
  }

}

// Ejemplo:
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
