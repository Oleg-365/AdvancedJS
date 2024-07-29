/*
Задание 2 (тайминг 35 минут)
У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
и instanceof.
1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
действия), а у RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции getAccountInfo используйте instanceof для проверки типа переданного
пользователя и дайте соответствующий ответ.
*/

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class PremiumUser extends User {

    premiumAccount = null;

    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    setPremiumAccount() {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
    }

}

class RegularUser extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        return user.premiumAccount ? `Premium account valid until ${new Date(user.premiumAccount).getFullYear()}` : "Premium account not active";
    } else if (user instanceof RegularUser) {
        return "Regular user";
    } else {
        throw new Error("Invalid user type");
    }
}

// Пример использования:
const premiumUser = new PremiumUser("John", "Doe");
premiumUser.setPremiumAccount();
const regularUser = new RegularUser("Jane", "Smith");
const premiumUser2 = new PremiumUser("Bob", "Smith");


console.log(getAccountInfo(premiumUser)); // Output: Premium account valid until 2024-12-31
console.log(getAccountInfo(regularUser)); // Output: Regular user
console.log(getAccountInfo(premiumUser2)); 
