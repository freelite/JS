'use strict';

let str = 'some';
// let strObj = new String(str); // Так не пишут

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);  // Создание прототипа от другого прототипа

// jonh.__proto__ = soldier; // Так уже не пишут

Object.setPrototypeOf(jonh, soldier); // Присвоение прототипа

jonh.sayHello();