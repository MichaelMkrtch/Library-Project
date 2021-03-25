
// Stores all books in an array
let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
};

function addToLibrary() {
    myLibrary.push(newBook);
}

let newBook = new Book("A Song of Ice and Fire", "George R. R. Martin", 694, false);
console.log(newBook.info());

