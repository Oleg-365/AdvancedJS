/*
Вы разрабатываете систему отзывов для вашего веб-сайта.
Пользователи могут оставлять отзывы, но чтобы исключить
слишком короткие или слишком длинные сообщения,
вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва,
кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
Однако если длина введенного отзыва менее 50 или более 500 символов,
функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице
под предыдущими отзывами, а не заменять их.

Вы можете использовать этот массив initialData
для начальной загрузки данных при запуске вашего приложения.
*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

// Функция для добавления отзыва
function addReview(event) {
    event.preventDefault();
    const reviewText = event.target.querySelector('.reviewText').value;
    const selectedProduct = event.target.querySelector('#productSelect').value;
    const productContainer = document.getElementById(selectedProduct);

    // Проверяем длину отзыва
    if (reviewText.length < 50 || reviewText.length > 500) {
        alert('Отзыв должен содержать от 50 до 500 символов');
        return;
    }

    // Создаем элемент для отзыва
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.textContent = reviewText;

    // Добавляем отзыв в контейнер продукта
    productContainer.appendChild(reviewElement);

    // Очищаем поле ввода
    event.target.querySelector('.reviewText').value = '';
}

// Находим форму и добавляем обработчик события
document.getElementById('reviewForm').addEventListener('submit', addReview);

// Функция для загрузки начальных данных
function loadInitialData() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const productSelect = document.getElementById('productSelect');

    initialData.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('review-container');
        productContainer.id = product.product.replace(/\s+/g, '-').toLowerCase(); // Преобразуем название продукта в id
        const productHeader = document.createElement('h2');
        productHeader.textContent = product.product;
        productContainer.appendChild(productHeader);

        productSelect.options.add(new Option(product.product, productContainer.id)); // Добавляем продукт в выпадающий список

        product.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.textContent = review.text;
            productContainer.appendChild(reviewElement);
        });

        reviewsContainer.appendChild(productContainer);
    });
}

// Вызываем функцию загрузки начальных данных при загрузке страницы
window.onload = loadInitialData;
