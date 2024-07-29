class Automobile {
    _horsePowers = 0; // Объявление приватного свойства _horsePowers со значением 0, используя синтаксис приватных полей

    set horsePowers(value) { // Определение сеттера для свойства horsePowers
        if (value < 0) throw new Error('Отрицательное количество сил!'); // Проверка, что значение больше или равно 0, иначе выбрасывается исключение
        this._horsePowers = value; // Установка значения свойства _horsePowers
    }

    get horsePowers() { // Определение геттера для свойства horsePowers
        return this._horsePowers; // Возвращение значения свойства _horsePowers
    }

    constructor(power) { // Определение конструктора класса
        this.horsePowers = power; // Установка значения свойства _horsePowers при создании объекта класса
    }
}

// Создаем новую машину

const car = new Automobile(100); // Создаем объект класса Automobile с параметром 100
console.log(car.horsePowers); // Выводим значение свойства _horsePowers объекта car
car.horsePowers = 50; // Устанавливаем значение свойства _horsePowers объекта car равным 50
console.log(car.horsePowers); // Выводим значение свойства _horsePowers объекта car
// car.horsePowers = -10; // Устанавливаем значение свойства _horsePowers объекта car равным -10

// Приватные свойства. Эти свойства начинаются со знака # и имеют защиту на уровне языка

class Car {
    #horsePowers = 0;

    set horsePowers(value) {
        if (value < 0) throw new Error('Отрицательное количество сил!');
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

// Создаем новую машину
const auto = new Car(100);
console.log(auto.horsePowers);
// Устанавливаем количество сил через сеттер
auto.horsePowers = 50;
console.log(auto.horsePowers); // 50
auto.horsePowers = -10; // Устанавливаем значение свойства horsePowers объекта car равным -10
// Устанавливаем количество сил напрямую
// auto.#horsePowers = 100; // Uncaught SyntaxError: Private field...