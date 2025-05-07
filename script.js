const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
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