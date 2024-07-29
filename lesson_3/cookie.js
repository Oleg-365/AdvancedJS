// Напишите функцию setCookie(name, value, days), которая устанавливает cookie с указанным именем, значением и сроком действия в днях.

let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + cookieValue;
};

setCookie('username', 'John Doe', 7);
setCookie('userinfo', 'Mister', 5);


// Напишите функцию getCookie(name), которая возвращает значение cookie с указанным именем.

let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

console.log(getCookie('username'));

// Напишите функцию deleteCookie(name), которая удаляет cookie с указанным именем.

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
};

deleteCookie('username');
deleteCookie('userinfo');
