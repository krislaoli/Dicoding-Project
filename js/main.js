let books = [];

const book1 = {
  title: "Book Title 1",
  author: "Kris",
  year: 2023,
  isComplete: false,
};
const book2 = {
  title: "Programmer",
  author: "Laoli",
  year: 2001,
  isComplete: false,
};
const book3 = {
  title: "Dicoding",
  author: "Jondo",
  year: 2003,
  isComplete: false,
};

const book4 = {
  title: "Member 4",
  author: "Pamungkas",
  year: 2007,
  isComplete: true,
};
const book5 = {
  title: "Indonesia",
  author: "Beginner",
  year: 2019,
  isComplete: true,
};
const book6 = {
  title: "Hirosima",
  author: "Hiro",
  year: 2023,
  isComplete: true,
};

books.push(book1, book2, book3, book4, book5, book6);


function renderBookshelf() {
  const incompleteBookshelfList = document.getElementById("incompleteBookshelfList");
  const completeBookshelfList = document.getElementById("completeBookshelfList");

  incompleteBookshelfList.innerHTML = "";
  completeBookshelfList.innerHTML = "";

  books.forEach((book, index) => {
    const bookItem = document.createElement("article");
    bookItem.classList.add("book_item");
    
    const h3 = document.createElement("h3");
    h3.textContent = book.title;
    
    const authorP = document.createElement("p");
    authorP.textContent = "Penulis: " + book.author;
    
    const yearP = document.createElement("p");
    yearP.textContent = "Tahun: " + book.year;

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");

    const button = document.createElement("button");
    button.classList.add("red");
    button.textContent = "Hapus buku";
    button.addEventListener("click", () => {
      removeBook(index);
    });

    actionDiv.appendChild(button);
    bookItem.appendChild(h3);
    bookItem.appendChild(authorP);
    bookItem.appendChild(yearP);
    bookItem.appendChild(actionDiv);

    if (book.isComplete) {
      completeBookshelfList.appendChild(bookItem);
    } else {
      const greenButton = document.createElement("button");
      greenButton.classList.add("green");
      greenButton.textContent = "Selesai dibaca";
      greenButton.addEventListener("click", () => {
        moveBookToComplete(index);
      });
      actionDiv.insertBefore(greenButton, button);
      incompleteBookshelfList.appendChild(bookItem);
    }
  });
}

renderBookshelf(); 

// const inputForm = document.getElementById("inputBook");
// inputForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const titleInput = document.getElementById("inputBookTitle");
//   const authorInput = document.getElementById("inputBookAuthor");
//   const yearInput = document.getElementById("inputBookYear");
//   const isCompleteCheckbox = document.getElementById("inputBookIsComplete");

//   const newBook = {
//     title: titleInput.value,
//     author: authorInput.value,
//     year: parseInt(yearInput.value),
//     isComplete: isCompleteCheckbox.checked,
//   };

//   books.push(newBook);
//   renderBookshelf(); 
//   inputForm.reset(); 
// });

function moveBookToComplete(index) {
  books[index].isComplete = true;
  renderBookshelf(); 
}

function removeBook(index) {
  books.splice(index, 1);
  renderBookshelf();
}

// const storedBooks = localStorage.getItem("books");
// if (storedBooks) {
//   books = JSON.parse(storedBooks);
//   renderBookshelf();
// }

function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// const storedBooks = localStorage.getItem("books");

if (storedBooks) {
  books = JSON.parse(storedBooks);
  renderBookshelf();
}

function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Memanggil fungsi saveBooksToLocalStorage() setiap kali ada perubahan pada data buku
function moveBookToComplete(index) {
  books[index].isComplete = true;
  saveBooksToLocalStorage();
  renderBookshelf();
}

function removeBook(index) {
  books.splice(index, 1);
  saveBooksToLocalStorage();
  renderBookshelf();
}

const inputForm = document.getElementById("inputBook");
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("inputBookTitle");
  const authorInput = document.getElementById("inputBookAuthor");
  const yearInput = document.getElementById("inputBookYear");
  const isCompleteCheckbox = document.getElementById("inputBookIsComplete");

  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
    year: parseInt(yearInput.value),
    isComplete: isCompleteCheckbox.checked,
  };

  books.push(newBook);
  saveBooksToLocalStorage();
  renderBookshelf();
  inputForm.reset();
});
