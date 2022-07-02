"use strict";  // Строгий режим

// У псевдомассивов нет методов, как у массивов

const arr = [2, 13, 26, 8, 10];  // Массив
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {      // функция делает arr.sort() по порядку
    return a - b;
}

arr[99] = 0; // Никогда так не делать
console.log(arr.length);  // Количество элементов массива

// arr. pop();           // Удаляет последний элемент массива и возвращает его
// arr. push('a');       // Добавляет последний элемент массива
// arr.shift();          // Удаляет первый элемент массива и возвращает его
// arr.unshift('a');     // Добавляет элемент в начало массива
// arr.split(s);         // Превращает строку в массив, s - разделитель
// arr.join(s);          // Превращает массив в строку, s - разделитель
// delete arr['1']       // Удаляет выбраный массив
// arr.sort(fn);         // Сортировка мссива. Если не передать функцию сравнения,
// то сортирует элементы, как строки.
//arr.reverse();         // Меняет порядок элементов на обратный

/*
Методы перебора:
// arr.forEach
// arr.map
// arr.every/some
// arr.filter
// arr.reduce
*/

console.log(arr);   

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // Переберает элементы массива
}

for (let value of arr) {
    console.log(value);  // Переберает элементы массива
}                        // Часто используемый вариант

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} ввнутри массива: ${arr}`); // Переберает элементы массива
});                                                       // Лучший вариант

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

// filter

const names = ['Ivan', 'Ann', 'Romario', 'Archer'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// map

const answers = ['IvAn', 'AnnA', 'RomaRIo', 'ArcHEr'];
const results = answers.map(item => item.toLowerCase());
console.log(results);
// ||
let answers2 = ['IvAn', 'AnnA', 'RomaRIo', 'ArcHEr'];
answers2 = answers.map(item => item.toLowerCase());
console.log(answers2);

// every/some

const some = [4, 'qwq', 'hello world!'];
console.log(some.some(item => typeof(item) === 'number'));

const some2 = [4, 5, 7];
console.log(some2.every(item => typeof(item) === 'number'));

// reduce

const arr1 = [4, 5, 1, 3, 2, 6];

const res = arr1.reduce((sum, current) => sum + current, 3);
console.log(res);

const array = ['apple', 'pear', 'plum'];

const result = array.reduce((sum, current) => `${sum}, ${current}`);
console.log(result);

// Делаем массив из объекта

const obj = {
    diman: 'persone',
    nina: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);