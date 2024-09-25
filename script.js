const getBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books', {})
        .then((response) => {
            console.log('SIAMO NEL THEN');
            console.log('OGGETTO RESPONSE', response);

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La risposta del server non è ok');
            }
        })
        .then((books) => {
            console.log('ECCO I LIBRI', books);

            const booksRow = document.getElementById('book-row');
            books.forEach((book) => {
                const newCol = document.createElement('div');
                newCol.classList.add('col', 'col-12', 'col-md-6', 'col-lg-3');

                newCol.innerHTML = `
                    <div class="card">
                        <img
                            src="${book.img}"  <!-- Usa l'URL dell'immagine fornito dall'API -->
                            
                            
                        
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5> <!-- Corretto da 'book.name' a 'book.title' -->
                            <p class="card-text">
                                € ${book.price} <!-- Mostra il prezzo se disponibile -->
                            </p>
                        </div>
                    </div>
                `;
                booksRow.appendChild(newCol);

            });
        })
        .catch((error) => {
            console.error(error);
        });
}

getBooks();
