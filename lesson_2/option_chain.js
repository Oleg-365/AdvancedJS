// Опциональная цепочка вызовов методов и оператор нулевого слияния
// Объект с информацией о пользователе

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Moscow',
        street: 'Lenina',
        house: 12,
        flat: 12,
    },
    contacts: {
        phone: '+79991234567',
        email: 'john@john.com',
    },
    isAdmin: true,
    hobby: 'html',
    premium: true,
};

// Опциональная цепочка вызовов методов
const email = user?.contacts?.email;
console.log(email); // john@john.com

// Если значение не определено или равно null или undefined, используется значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default value';
console.log(defaultValue); // Выводит 'Default value', т.к. свойство otherValue не существует в объекте user

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName); // Lenina