const container = document.getElementById("book-container");

function fetchBooks() {
    const apiUrl = ""; 

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayBooks(data);
        })
        .catch(error => {
            showError("An error occurred while fetching data.");
        });
}

function displayBooks(books) {
    container.innerHTML = ""; 

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const thumbnail = document.createElement("img");
        thumbnail.src = book.thumbnailUrl || "placeholder.jpg"; 
        thumbnail.alt = book.title;
        thumbnail.classList.add("book-thumbnail");

        const bookDetails = document.createElement("div");
        bookDetails.classList.add("book-details");

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        bookDetails.appendChild(title);
        bookDetails.appendChild(author);

        bookCard.appendChild(thumbnail);
        bookCard.appendChild(bookDetails);

        container.appendChild(bookCard);
    });
}

function showError(message) {
    container.innerHTML = `<p class="error">${message}</p>`;
}

fetchBooks();
