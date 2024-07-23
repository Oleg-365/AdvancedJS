"use strict";
//Задание №1
// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// Создать объект книги, добавить метаданные и вывести их на консоль.

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
  book[metadataType] = data;
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
  return book[metadataType];
}

// Создание объекта книги и добавление метаданных
let book = {
  title: "1921",
  author: "К.И. Чуковский",
};

addMetadata(book, reviewSymbol, "Отличная книга!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "Мойдодыр");

// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга!!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["Мойдодыр"]

//**************************************************************************
//Задание №2
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
// Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
// Массив книг:
// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// const library = {
//     books,
//     [Symbol.iterator]: function () {
//         let counter = 0;
//         return {
//             next: () => counter < this.books.length
//                 ? {value: this.books[counter++], done: false}
//                 : {done: true},
//         };
//     },
// };

// for (const book of library) {
//     console.log(`Title: ${book.title}, Author: ${book.author}`);
// }

//*****************************************************************
//Задание №3

// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них.
// Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать
// коллекции DOM-элементов в массивы и работать с ними.
// Дан код html:
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>
//
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.
// Выведите результат на консоль.

//console.log(Array.from(document.querySelectorAll('div')).filter(e => e.hasAttribute('data-active')));

//*****************************************************************
//Задание №4
// Текст задания:
//     Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
//     Map будет использоваться для хранения соответствия между уроком и преподавателем.
//     Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
// 1. Map: урок => преподаватель
// let lessons = new Map();
// lessons.set('Математика', 'Смирнов'); // "Математика", "Смирнов"
// lessons.set('История', 'Иванова'); // "История", "Иванова"
// // 2. Map: студент => Set уроков
// const Ivanov = { name: 'Иван' };
// const IvanovLessons = new Set(['Математика', 'История']);
// let students = new Map();
// students.set(Ivanov, IvanovLessons);
// // Проверка:
// console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
// console.log(`Уроки Ивана: ${[...students.get(Ivanov)]}`); // Математика, История

// Test
// const newStudent = (name, lessons = []) => ({
//     name,
//     lessons: new Set(lessons),
//     addLesson: function (lessonName) {
//         this.lessons.add(lessonName);
//     },
//     getLessons: function () {
//         return Array.from(this.lessons);
//     }
// });
// const st = newStudent('Иван', ['Математика', 'Информатика']);
// console.log({
//     st,
//     'lessons': st.getLessons(),
// });
