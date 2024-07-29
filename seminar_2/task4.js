/*
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
введенное значение должно содержать от 3 до 10 символов.
1. Создайте HTML-структуру с текстовым полем, кнопкой и списком.
2. Напишите функцию, которая будет добавлять элементы в список или генерировать исключение, если длина введенного значения не соответствуеттребованиям.
*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addItemButton').addEventListener('click', addItem);
});

function addItem() {
    const inputItem = document.getElementById('inputItem').value.trim();

    try {
        if (inputItem.length < 3 || inputItem.length > 10) {
            throw new Error('Длина введенного значения должна быть от 3 до 10 символов');
        }

        const itemList = document.getElementById('itemList');
        const li = document.createElement('li');
        li.textContent = inputItem;
        itemList.appendChild(li);

        // Очистить текстовое поле после добавления элемента в список
        document.getElementById('inputItem').value = '';
    } catch (error) {
        alert(error.message);
    }
}
