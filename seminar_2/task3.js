/*
Вы создаете интерфейс, где пользователь вводит число.
Ваша задача — проверить, является ли введенное значение числом или нет, и дать
соответствующий ответ.
1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
"Проверить".
2. Добавьте место (например, div) для вывода сообщения пользователю.
3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
должна использовать try и catch для проверки вводимого значения.
*/

function checkNumber() {
    const numberInput = document.getElementById('numberInput').value;

    try {
        if (isNaN(numberInput)) {
            throw new Error('Введенное значение не является числом');
        }
        document.getElementById('message').innerText = 'Введенное значение является числом ' + numberInput;
    } catch (error) {
        document.getElementById('message').innerText = error.message;
    }
}

