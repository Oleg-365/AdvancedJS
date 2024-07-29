let map = new Map();

map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // число в качестве ключа
map.set(true, 'bool1'); // булево значение как ключ

// Обычный объект Object приводит ключи к строкам
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // num1
console.log(map.get('1')); // str1
console.log(map.size); // 3

// get set

// let map = new Map();
map.set('1', 'We')
    .set(1, 'likes')
    .set(true, 'JavaScript');

console.log(map);

// Перебор коллекции Map

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// перебор по значениям (количества)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// перебор по ключам и значениям
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    console.log(entry); // ['cucumber', 500], ['tomatoes', 350], ['onion', 50]
}

// перебор по ключам и значениям
for (let [key, value] of recipeMap) {
    console.log(key, value); // cucumber 500, tomatoes 350, onion 50
}

// перебор по ключам и значениям foreach
recipeMap.forEach(function (value, key, map) {
    console.log(value, key, map); // 500 cucumber Map(3) {"cucumber" => 500, "tomatoes" => 350, "onion" => 50}, 500 cucumber Map(3) {"cucumber" => 500, "tomatoes" => 350, "onion" => 50}, 350 tomatoes Map(3) {"cucumber" => 500, "tomatoes" => 350, "onion" => 50}, 50 onion Map(3) {"cucumber" => 500, "tomatoes" => 350, "onion" => 50}
});

// Работа с объектами
// Object.entries поможет создать Map:
// let map = new Map(Object.entries(obj));

// Object.fromEntries поможет создать объект из Map:
let obj = Object.fromEntries(map);

// ----- Set -----
let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
    'Манька',
];

let uniqueBuddies = new Set(buddies);

console.log(uniqueBuddies); // Set(9) {"Жучка", "Тузик", "Булька", "Бобик", "Валера", "Манька"}

// Перевести обратно в массив нам поможет метод Array.from
console.log(Array.from(uniqueBuddies)); // ["Жучка", "Тузик", "Булька", "Бобик", "Валера", "Манька"]