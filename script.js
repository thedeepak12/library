const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let bookshelf = document.querySelector("#bookshelf");
    bookshelf.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");

        const readClass = book.read ? "read-yes" : "read-no";
        const readText = book.read ? "Read" : "Not Read";

        bookEl.innerHTML = ` 
        <div class="book-card">
            <div class="card-title">
                <h3 class="title">${book.title}</h3>
            </div>
            <div class="card-author">
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-pages">
                <p class="pages">${book.pages} pages</p>
            </div>
            <button class="read-status ${readClass}" onclick="toggleRead(${i})" style="border: none; color: black;">${readText}</button>
        </div>
        `
        bookshelf.appendChild(bookEl);
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    render();
}

let newBookBtn = document.getElementById("new-book-btn");
newBookBtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    event.target.reset();
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "none";
})

document.addEventListener("click", function(event) {
    const form = document.getElementById("new-book-form");
    const button = document.getElementById("new-book-btn");

    if (form.style.display !== "block") return;

    if (form.contains(event.target) || button.contains(event.target)) return;

    form.reset();
    form.style.display = "none";
});