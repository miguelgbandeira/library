const myLibrary = [];
const ulBooks = document.querySelector(".books");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".btn");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, nPages, isRead) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.isRead = isRead;
  this.info = function () {
    let readString = "";
    if (isRead) {
      readString += "already read";
    } else {
      readString += "not read yet";
    }
    return title + " by " + author + ", " + nPages + " pages, " + readString;
  };
}

function addBookToLibrary(title, author, nPages, isRead) {
  const book = new Book(title, author, nPages, isRead);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const li = document.createElement("li");
    li.classList.add("book");
    li.textContent = book.info();
    console.log(book);
    ulBooks.appendChild(li);
  });
}

addBookToLibrary("title", "test", "3", true);
displayBooks();
