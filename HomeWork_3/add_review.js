/**
Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах.
Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
Страница добавления отзыва:
Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.
Страница просмотра отзывов:
Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
*/

document.getElementById('addReviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const review = document.getElementById('review').value;

    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(review);

    localStorage.setItem('reviews', JSON.stringify(reviews));

    alert('Отзыв успешно добавлен!');
    window.location.href = 'view_reviews.html';
});
