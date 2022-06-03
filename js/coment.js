"use strict";

alert('Hello!');

const obj = {
    name: 'Diman',
    age: 34,
    isMarried: false
};

console.log(obj.name);  //Diman

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);  //orange.jpg

const result = confirm('Are you here?');
console.log(result);   //Are you here?

const answer = +prompt('Вам есть 18?', '18');
console.log(answer + 5);

const answers = [];

answers[0] = prompt('Ваше имя?', '');
answers[1] = prompt('Ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Dmitriy';

alert(`Привет, ${user}`);  //Привет, Dmitriy

console.log('arr' + ' - object');
console.log(4 + '5');

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);  //11
console.log(decr);  //9