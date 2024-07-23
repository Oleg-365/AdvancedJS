'use strict';
class Restaurant {
    static dishTypes = {
        pizza: 'Пицца',
        sushi: 'Суши',
        desert: 'Десерт',
    };
    static dishes = new Map()
        .set('Маргарита', this.dishTypes.pizza)
        .set('Пепперони', this.dishTypes.pizza)
        .set('Филадельфия', this.dishTypes.sushi)
        .set('Калифорния', this.dishTypes.sushi)
        .set('Тирамису', this.dishTypes.desert)
        .set('Чизкейк', this.dishTypes.desert);
    static cooks = new Map()
        .set('Виктор', this.dishTypes.pizza)
        .set('Ольга', this.dishTypes.sushi)
        .set('Дмитрий', this.dishTypes.desert);
    static orders = new Map();
    static addOrder(clientName, dishesName = []) {
        this.orders.set(
            {clientName},
            dishesName
                .filter(dish => this.dishes.has(dish))
                .map(dish => `${this.dishes.get(dish)} "${dish}"`)
        );
    }
    static viewCooks() {
        console.log('\nПовара и их специализации:');
        this.cooks.forEach((spec, cook) => {
            console.log(`${cook} - специализация: ${spec}`);
        });
    }
    static viewDishes() {
        console.log('\nБлюда и их повара:');
        this.dishes.forEach((type, name) => {
            const cook = Array.from(this.cooks).find(data => data[1] === type);
            console.log(`${type} "${name}" - повар: ${cook ? cook[0] : 'Отсутствует'}`);
        });
    }
    static viewOrders() {
        console.log('\nЗаказы:');
        this.orders.forEach((order, client) => {
            console.log(`Клиент ${client.clientName} заказал(а): ${order.join(', ')}`);
        });
    }
    static viewInfo() {
        this.viewCooks();
        this.viewDishes();
        this.viewOrders();
    }
}
Restaurant.addOrder('Алексей', ['Пепперони', 'Тирамису']);
Restaurant.addOrder('Мария', ['Калифорния', 'Маргарита']);
Restaurant.addOrder('Ирина', ['Чизкейк']);
Restaurant.viewInfo();