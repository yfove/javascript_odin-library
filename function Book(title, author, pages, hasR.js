function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.info = function () {
    console.log(title, authors, pages, hasRead);
  };
  this.toggleRead = function () {
    this.hasRead = this.hasRead ? false : true;
  };
}

//creates book from Book Constructor, adds to library

theHobbit.info(); // "information based on this book"

let myLibrary = [];

function addBookToLibrary() {
  newBook = new Book(title, author, pages, hasRead);
  myLibray.push(newBook);
}
