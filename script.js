
// Button event listeners to create new book, add new book, close popup
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


// Book Constructor
function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}

// creates book from Book constructor, adds to library
let myLibrary = [];
let newBook;

function addBookToLibrary () {
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    setData();
    render();
    form.reset();
}

// Creates book visual in browser
function render() {
    const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

// Creates book DOM elements to use in render();
function createBook(item) {
    const library = document.querySelector('#Library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');


    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages')
    bookDiv.appendChild(pageDiv);


    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);

    if (item.read === false) {
        readBtn.textContent = 'Not Read Yet';
        readBtn.style.backgroundColor = '#e04f63';
    } else {
        readBtn.textContent = 'Forbidden Knowledge Attained';
        readBtn.style.backgroundColor = '#63da63';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute =('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        setData();
        render();
    });


    // Add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        setData();
        render();
    });

};

// Setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

// Pulls books from local storage when page is refreshed
function restore() {
    if (!localStorage.myLibrary) {
        render();
    } else {
        let objects = localStorage.getItem(`myLibrary`) // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
}

restore();


