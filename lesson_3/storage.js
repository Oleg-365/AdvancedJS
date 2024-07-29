// Пример 1: Установка и получение значения из LocalStorage

// Установка значения в LocalStorage
localStorage.setItem('username', 'John');

// Получение значения из LocalStorage
let username = localStorage.getItem('username');
console.log(username);

// Пример 2: Удаление значения из LocalStorage
localStorage.removeItem('username');

// Проверка, что значение удалено
let username2 = localStorage.getItem('username');
console.log('username2', username2);

// Пример 3: Удаление всех значений из LocalStorage

// Установка значения в LocalStorage
localStorage.setItem('username', 'John');
localStorage.setItem('isLoggedIn', 'true');

// Очистка LocalStorage
localStorage.clear();

// Проверка, что LocalStorage пустой
console.log('LocalStorage', localStorage);


// Проверяем, есть ли значение счетчика в LocalStorage
if (localStorage.getItem('counter')) {
    // Получаем значение счетчика из LocalStorage
    let counter = parseInt(localStorage.getItem('counter'));
    // Увеличиваем значение счетчика на 1
    counter++;
    // Устанавливаем значение счетчика в LocalStorage
    localStorage.setItem('counter', counter.toString());
} else {
    // Устанавливаем значение счетчика в LocalStorage
    localStorage.setItem('counter', '1');
}

// Получаем значение счетчика из LocalStorage
console.log('counter', localStorage.getItem('counter'));

// Проверяем, есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счетчика и сохраняем его в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter);
};

// Выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});
