// Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением об ошибке.

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject(new Error('Ошибка генерации случайного числа'));
            }
        }, 1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log(`Сгенерировано случайное число ${number}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Ошибка запроса');
                }
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject('Ошибка загрузки данных.');
            });
    });
};

// https://kitsu.io/api/edge/anime?filter[text]=tokio

fetchData('https://kitsu.io/api/edge/anime?filter[text]=tokio')
    .then((data) => {
        console.log('Получены данные:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// Напишите функцию checkFileExists(file)? которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен резолвиться, если файл существует, и отклониться, если файла нет.

let checkIfFileExists = (file) => {

};

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkIfFileExists(file);
            if (fileExists) {
                resolve(file);
            } else {
                reject(new Error('Файл не найден'));
            }
        }, 2000);
    });
};

checkFileExists('file.txt')
    .then((file) => {
        console.log('Файл найден:', file);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// Напишите функцию calculateSum(a, b), которая принимает 2 числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
};

calculateSum(2, 3)
    .then((sum) => {
        console.log(`Сумма чисел равна ${sum}`);
    });


// Напишите функцию divideNumbers(a, b), которая принимает 2 числа в качестве аргументов и возвращает Promise. Promise должен выполнять деление первого числа на второе. Если второе число равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0ю

let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error('Невозможно делить на 0'));
        } else {
            resolve(a / b);
        }
    });
};

divideNumbers(10, 5)
    .then((result) => {
        console.log(`Результат деления: ${result}`);
    })
    .catch((error) => {
        console.error(`Ошибка деления: ${error}`);
    });

// Цепочки промисов
new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
});


// finally

let processData = (data) => {
    // Implement your logic to process the data
    // Return the processed result
};

let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        // Perform the operation with the data
        let result = processData(data);

        // Complete the Promise
        if (result) {
            resolve(result);
        } else {
            reject(new Error('Operation failed'));
        }
    }).finally(() => {
        console.log('Operation completed');
    });
};

performOperation('example')
    .then((result) => {
        console.log('Result:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
])
    .then(console.log)
    .catch(console.log);


// Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls), которая принимает массив URL-адреса в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первым ответил на запрос.

let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};

let urls = [
    'https://example.com',
    'https://example.org',
    'https://example.net'
];

checkServerResponse(urls)
    .then((url) => {
        console.log(`Сервер ${url} отвечает быстрее`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });