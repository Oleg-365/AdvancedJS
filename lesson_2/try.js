try {
    undefined = 1;
}
catch {
    console.log('Что-то произошло');
}
finally {
    console.log('Отличный результат!');
}

// Пример: работа с делением чисел
function divideNumbers(a, b) {
    try {
        const result = a / b; // Попытка выполнить деление
        if (isNaN(result)) {
            throw new Error('Результат не является числом!');
        }
        console.log(`Результат деления: ${result}`);
    } catch (error) {
        console.error(`Ошибка деления: ${error}`);
    } finally {
        console.log('Операция деления завершена.');
    }
}

divideNumbers(10, 2); // Пример корректного деления
divideNumbers(10, 0); // Пример деления на ноль

// Пользовательские ошибки
// Создание пользовательской ошибки
class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomError'; // Установка имени ошибки
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Переданное значение не является числом!'); // Выбрасывание пользовательской ошибки  с сообщением
    }
    console.log('Валидация успешна.');
}

try {
    validateNumber('42'); // Проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) { // Проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error(`Error: ${error.message}`); // Вывод сщщбщения об ошибке
        console.log(`Error Type: ${error.name}`); // Вывод имени ошибки
    } else {
        console.error(`Error: ${error}`); // Вывод сообщения об ошибке по умолчанию
    }
}