let myLibrary = []; // array vacío

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  // por ahora solo imprimimos la biblioteca en consola para testear
  console.log("Biblioteca:", myLibrary);
}

const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();
  const read = document.getElementById("status").value;

  if (title && author && pages && read) {
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayLibrary();
    bookForm.reset();

    function displayLibrary() {
      const libraryDiv = document.getElementById("library");
      libraryDiv.innerHTML = ""; // Limpiamos todo para actualizar
    
      myLibrary.forEach(book => {
        libraryDiv.innerHTML += `
          <div class="book-card" data-id="${book.id}">
            <p class="book-title"><strong>Title:</strong> ${book.title}</p>
            <p class="book-author"><strong>Author:</strong> ${book.author}</p>
            <p class="book-pages"><strong>Pages:</strong> $s{book.pages}</p>
            <p class="book-status"><strong>Status:</strong> ${book.read === "read" ? "Read" : "Not Read"}</p>
            <button class="remove-btn">Remove</button>
            <button class="toggle-read-btn">Toggle Read Status</button>
          </div>
        `;
      });
    }
    
  }
});
