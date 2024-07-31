/*
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
(имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
задержки — отображать новости на странице.
1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
выполнение и ошибки с использованием then() и catch().
4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
её снова после завершения операции (будь то успешная загрузка или ошибка).
*/

// Пример "виртуальной" базы данных
const newsDatabase = [
    { title: "Новость 1", text: "Текст новости 1", author: "Автор 1", date: "2024-06-06" },
    { title: "Новость 2", text: "Текст новости 2", author: "Автор 2", date: "2024-06-05" },
    { title: "Новость 3", text: "Текст новости 3", author: "Автор 3", date: "2024-06-04" }
];

// Функция для имитации задержки и загрузки новостей
function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.1) {
                reject("Ошибка при загрузке новостей");
            } else {
                resolve(newsDatabase);
            }
        }, 2000);
    });
}

// Функция для отображения новостей
function displayNews(news) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    news.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>Автор:</strong> ${article.author}</p>
            <p><strong>Дата:</strong> ${article.date}</p>
            <p>${article.text}</p>
        `;
        newsContainer.appendChild(articleElement);
    });
}

// Функция для отображения сообщения об ошибке
function displayError(errorMessage) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = 'block';
}

// Функция для показа прелоадера
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

// Функция для скрытия прелоадера
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Обработчик события для кнопки "Загрузить новости"
document.getElementById('load-news-btn').addEventListener('click', () => {
    const loadNewsButton = document.getElementById('load-news-btn');
    loadNewsButton.disabled = true;
    showLoader(); // Показываем прелоадер перед загрузкой новостей
    fetchNews()
        .then(news => {
            displayNews(news);
        })
        .catch(error => {
            displayError(error);
        })
        .finally(() => {
            loadNewsButton.disabled = false;
            hideLoader(); // Скрываем прелоадер после загрузки или ошибки
        });
});

