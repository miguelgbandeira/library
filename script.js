const myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".form");
const booksContainer = document.querySelector(".books-container");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#book-author").value;
  const numberOfPages = document.querySelector("#book-pages").value;
  const isRead = document.querySelector("#isRead").checked;

  addBookToLibrary(title, author, numberOfPages, isRead);

  event.target.reset();

  dialog.close();
  displayBooks();
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  form.reset();
  dialog.close();
});

function Book(title, author, nPages, isRead, index) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.isRead = isRead;
  this.index = index;
}

function addBookToLibrary(title, author, nPages, isRead) {
  const book = new Book(title, author, nPages, isRead, myLibrary.length);
  console.log(myLibrary.length);
  myLibrary.push(book);
}

function createBookCard(book, index) {
  const div = document.createElement("div");
  div.classList.add("book-card");
  const h3 = document.createElement("h3");
  h3.textContent = book.title;
  const pAuthor = document.createElement("p");
  pAuthor.textContent = book.author;
  const nPages = document.createElement("p");
  nPages.textContent = `${book.nPages} pages`;
  const deleteButton = document.createElement("button");

  const readButton = document.createElement("button");
  readButton.textContent = book.isRead ? "Read" : "Not Read";
  readButton.style.backgroundColor = book.isRead
    ? "rgb(159 255 156)"
    : "rgb(255 156 155)";
  readButton.addEventListener("click", function () {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    this.textContent = myLibrary[index].isRead ? "Read" : "Not Read";
    this.style.backgroundColor = myLibrary[index].isRead
      ? "rgb(159 255 156)"
      : "rgb(255 156 155)";
  });

  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    displayBooks();
  });
  div.appendChild(h3);
  div.appendChild(pAuthor);
  div.appendChild(nPages);
  div.appendChild(readButton);
  div.appendChild(deleteButton);
  booksContainer.appendChild(div);
}

function displayBooks() {
  booksContainer.textContent = "";
  myLibrary.forEach((book, index) => {
    createBookCard(book, index);
  });
}
