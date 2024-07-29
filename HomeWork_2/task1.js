/*
Представьте, что у вас есть класс для управления библиотекой.
В этом классе будет приватное свойство для хранения списка книг,
а также методы для добавления книги, удаления книги
и получения информации о наличии книги.

Класс должен содержать приватное свойство #books,
которое инициализируется пустым массивом
и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке,
выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит
удалять книгу из списка по названию.
Если книги с таким названием нет в списке,
выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет
проверять наличие книги в библиотеке и возвращать true или false
в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает
начальный список книг (массив) в качестве аргумента.
Убедитесь, что предоставленный массив не содержит дубликатов;
в противном случае выбрасывайте ошибку.
*/

class Library {
    // Конструктор класса
    constructor(initialBooks = []) {
        // Приватное свойство для хранения списка книг
        this.#books = [];

        // Проверяем, что предоставленный массив не содержит дубликатов
        const uniqueTitles = new Set();
        initialBooks.forEach(book => {
            if (uniqueTitles.has(book.title)) {
                throw new Error('Ошибка! Список книг содержит дубликаты.');
            }
            uniqueTitles.add(book.title);
        });

        // Инициализируем список книг начальным массивом
        this.#books = initialBooks;
    }

    // Приватное свойство для хранения списка книг
    #books;

    // Геттер для получения текущего списка книг
    get allBooks() {
        return this.#books;
    }

    // Метод для добавления книги в список
    addBook(book) {
        // Проверяем, существует ли уже книга с таким заголовком
        if (this.hasBook(book.title) === true) {
            // if (this.#books.some(existingBook => existingBook.title === book.title)) {
            throw new Error('Ошибка! Такая книга уже есть в библиотеке.');
        }
        // Добавляем книгу в список
        this.#books.push(book);
    }

    // Метод для удаления книги из списка
    removeBook(title) {
        // Проверяем, существует ли книга с таким заголовком
        const index = this.#books.findIndex(book => book.title === title);
        if (index === -1) {
            throw new Error('Ошибка! Такой книги нет в библиотеке.');
        }
        // Удаляем книгу из списка
        this.#books.splice(index, 1);
    }

    // Метод для проверки наличия книги в библиотеке
    hasBook(title) {
        // Проверяем, существует ли книга с таким заголовком
        return this.#books.some(book => book.title === title);
    }
}

// Пример использования класса Library
const myLibrary = new Library([
    { title: 'Book 1', author: 'Author 1', year: 2000 },
    { title: 'Book 2', author: 'Author 2', year: 2010 },
    { title: 'Book 3', author: 'Author 3', year: 2020 }
]);

console.log(myLibrary.allBooks); // Выведет массив объектов книг

myLibrary.addBook({ title: 'Book 4', author: 'Author 4', year: 2022 });
console.log(myLibrary.allBooks); // Выведет обновленный список книг

myLibrary.removeBook('Book 2');
console.log(myLibrary.allBooks); // Выведет обновленный список книг

console.log(myLibrary.hasBook('Book 3')); // Выведет: true
console.log(myLibrary.hasBook('Book 5')); // Выведет: false

myLibrary.addBook({ title: 'Book 4', author: 'Author 4', year: 2022 }); // Добавление существующей книги
myLibrary.removeBook('Book 5'); // Удаление несуществующей книги
