// Разработать систему регистрации пользователей для веб-приложения

// Глобальный объект
const App = {};

// Защищенные свойства класса
class User {
    // Защищенное свойство _name
    #_name;

    constructor(name) {
        this.#_name = name;
    }

    // Геттер для свойства _name
    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // Проверка введенных данных
        if (!name || !email || !password) {
            throw new Error('Введены не все данные');
        }

        // Создание пользователя
        const user = new User(name);

        // Дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // Здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер

        console.log(`Пользователь ${user.getName()} успешно зарегистрирован`);
        console.log(`Дополнительные данные пользователя:`, userData);
    } catch (error) {
        console.error(`Error:`, error.message);
    } finally {
        console.log('Завершение регистрации пользователя.');
    }
};

// Запуск регистрации пользователя
App.registerUser('John', 'john@email', '123456');
App.registerUser('Jane', 'jane@email', '123456');
App.registerUser('Jack', 'jack@email', '123456');
App.registerUser('Jill', 'jill@email', '123456');
App.registerUser('Jill', '', '123456');