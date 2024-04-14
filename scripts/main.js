// Add a constructor for book objects

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
  }
}

// All of your book objects are going to be stored in an array,
// so add a function to the script (not the constructor)
// that can take user’s input and store the new book objects into an array.

const library = [];

function getBookDetails() {
  const title = prompt('Enter the title of the book');
  const author = prompt('Enter the author of the book');
  const pages = prompt('Enter the number of pages in the book');
  const read = prompt('Have you read the book?');

  let book = new Book(title, author, pages, read);
  library.push(book);

  let anotherBook = prompt('Do you want to add another book? (yes or no)');
  if (anotherBook === 'yes') {
    getBookDetails();
  } else {
    console.log(library);
  }
}
