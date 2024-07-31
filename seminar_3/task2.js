/*
Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
а затем загружать или удалять сохраненные данные.
Разработка Интерфейса:
Создать HTML-страницу с:
● Одним текстовым полем для ввода данных пользователем.
● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
● Местом для отображения сохраненного текста.
Программирование Логики на JavaScript:
1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
сообщение отображается на странице.
*/

// Функция для сохранения текста в localStorage
function saveText() {
    const textInputEl = document.getElementById('textInput');
    const text = textInputEl.value;
    if (text !== '') {
        localStorage.setItem('savedText', text);
        document.getElementById('output').innerText = 'Текст сохранен';
        textInputEl.value = '';
    } else {
        document.getElementById('output').innerText = 'Введите текст для сохранения';
    }
}

// Функция для загрузки текста из localStorage
function loadText() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('output').innerText = savedText;
    } else {
        document.getElementById('output').innerText = 'Сохраненного текста нет';
    }
}

// Функция для очистки сохраненного текста из localStorage
function clearText() {
    localStorage.removeItem('savedText');
    document.getElementById('output').innerText = 'Сохраненный текст очищен';
}

// Обработчики событий для кнопок
document.getElementById('saveBtn').addEventListener('click', saveText);
document.getElementById('loadBtn').addEventListener('click', loadText);
document.getElementById('clearBtn').addEventListener('click', clearText);
