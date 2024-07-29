const symbol = Symbol(); // объявление

const dogID = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');

console.log(dog1 == dog2); // false

// const dogID = Symbol('dog');
alert(dogID) // TypeError: Cannot convert a Symbol value to a string
console.log(dogID); // Symbol(dog)

console.log(dogID.description); // dog можно посмотреть описание

// let id = Symbol('dogID');

let buddy = {
    [id]: 'Buddy'
}

console.log(buddy[id]); // Buddy

let id = Symbol('id');
buddy[id] = 'Bobik'; // Идентификаторы создаются уникальными всегда

// Проблемы, которые могут возникнуть без использования Symbol
let buddy = { name: 'Tuzik' }; // Объявляем в нашем скрипте свойство id
buddy.id = 'Our id'; // ...другой скрипт тоже хочет свой идентификатор...
buddy.id = 'their id' // Ой! Свойство перезаписано сторонней библиотекой!

// Как решить?

let buddies = {
    [Symbol('id')]: 'Our id',
    [Symbol('name')]: 'Tuzik',
    [Symbol('age')]: 10,
    elephant: 'slon'
}

console.log(buddies);

let newBuddies = {};
Object.assign(newBuddies, buddies); // Object.assignскопирует все свойства, в том числе и символьные.

console.log(newBuddies);

// ------ Symbol.for ------

// Читаем символ из глобального реестра и записываем его в переменную

// let id = Symbol.for('id'); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for('id');

// проверяем, что это один и тот же символ
alert(id === idAgain); // true

// ------ Symbol.keyFor ------ описание символа по идентификатору
// получаем символ по имени
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id