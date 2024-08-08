
const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

const onLoadBtn = document.getElementById('loadBooks');
const bookListElement = document.querySelector('table tbody');

const formSumbit = document.querySelector('#form button:last-of-type');

const titleInput = document.querySelector('#form input[name=title]');
const authorInput = document.querySelector('#form input[name=author]');

const formEl = document.getElementById('form');

onLoadBtn.addEventListener('click', fetchBooks);

formSumbit.addEventListener('click', (e) => {
  e.preventDefault();

  const bookId = formEl.getAttribute('data-edit-id');
  const bookData = {
    _id: bookId,
    title: titleInput.value,
    author: authorInput.value
  }

  fetch(`${baseUrl}/${bookId ? bookId : ''}`, {
    method: bookId ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(bookData),

  })
    .then(response => response.json())
    .then(result => {

      titleInput.value = "";
      authorInput.value = "";

      fetchBooks();
    })
    .finally(()=>{
      formEl.removeAttribute('data-edit-id');
    })
});

function createBokElement(book) {

  const nameTdElement = document.createElement('td');
  nameTdElement.textContent = book.title;

  const authorTdElement = document.createElement('td');
  authorTdElement.textContent = book.author;

  const editbtn = document.createElement('button');
  editbtn.textContent = "Edit";


  const deletebtn = document.createElement('button');
  deletebtn.textContent = "Delete";

  const btnElements = document.createElement('td');
  btnElements.appendChild(editbtn);
  btnElements.appendChild(deletebtn);

  const trElement = document.createElement('tr');
  trElement.appendChild(nameTdElement);
  trElement.appendChild(authorTdElement);
  trElement.appendChild(btnElements);

  deletebtn.addEventListener('click', async () => {
    await fetch(`${baseUrl}/${book._id}`, {
      method: 'DELETE',
    });

    trElement.remove();
  });

  editbtn.addEventListener('click', () => {

    titleInput.value = book.title;
    authorInput.value = book.author;

    formEl.setAttribute('data-edit-id', book._id);
    trElement.remove();

  });

  return trElement;
};

function fetchBooks() {
  fetch(baseUrl)
    .then(response => response.json())
    .then(result => {
      bookListElement.innerHTML = "";
      const books = Object.values(result);

      for (const book of books) {
        const bookElement = createBokElement(book);
        bookListElement.appendChild(bookElement);
      }
    });
}

