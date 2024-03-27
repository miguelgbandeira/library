const myLibrary = [];
const ulBooks = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-button");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".form");

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
  const li = document.createElement("li");
  li.classList.add("book");
  const div = document.createElement("div");
  div.classList.add("book-card");
  const h3 = document.createElement("h3");
  h3.textContent = book.title;
  const pAuthor = document.createElement("p");
  pAuthor.textContent = book.author;
  const nPages = document.createElement("p");
  nPages.textContent = book.nPages;
  const isRead = document.createElement("p");
  isRead.textContent = book.isRead;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    displayBooks();
  });
  div.appendChild(h3);
  div.appendChild(pAuthor);
  div.appendChild(nPages);
  div.appendChild(isRead);
  div.appendChild(deleteButton);
  li.appendChild(div);
  ulBooks.appendChild(li);
}

function displayBooks() {
  ulBooks.textContent = "";
  myLibrary.forEach((book, index) => {
    createBookCard(book, index);
  });
}
