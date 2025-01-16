

function fetchBooks() {
  return fetch(`https://anapioficeandfire.com/api/books`) 
    .then((r) => {
      if (!r.ok) {
        throw new Error('Error');
      } else {
        return r.json();
      }
    })
    .then((data) => {
      renderBooks(data);
    })
    .catch((error) => {
      console.error(error);
    });
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

window.fetchBooks = fetchBooks;