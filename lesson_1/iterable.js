const string = 'Hello';
console.log(string[2]); // l
console.log(string.length); // 5

for (let str of string) {
    console.log(str); // H e l l o);
}

// все работает как с циклами. Это так же просто работает и с другими символами, даже нестандартными, имеющими свои ASCII-коды

// Мы хотим из него сделать последовательность таким образом: for (let number of range), где на выходе получим последовательность от 1 до 17

let range = {
    from: 1,
    to: 17
};

// 1. вызов for...of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
    // ... она возвращает объект итератора:
    // 2. Далее, for(...of...) работает только с этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for(...of...)
        // 4. он должен вернуть значение в виде объекта
        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
}

// теперь работает!
for (let number of range) {
    console.log(number);
}

// Можно было и вместе, но тогда this будет общий
let range = {
    from: 1,
    to: 17,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return {
                done: true
            };
        }
    }
}

// ------ Array.from -----
let pseudo = {
    0: 'first',
    1: 'second',
    length: 2,
};

let array = Array.from(pseudo);
console.log(array); // ['first', 'second']
console.log(array.pop());

// Даже со строкой работает
let pseudo2 = "It's Array Like!";
let array2 = Array.from(pseudo2);
console.log(array2); // ['I', 't', "'",'s','', 'A', 'r', 'r', 'a', 'y','', 'L', 'i', 'k', 'e', '!']
