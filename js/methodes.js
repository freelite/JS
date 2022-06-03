"use strict";

const str = 'teSt';

console.log(str.toUpperCase());  //TEST
console.log(str.toLowerCase());  //test

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //5

const logg = 'hello world';
console.log(logg.slice(6, 11));  //world
console.log(logg.substring(6, 11));  //world
console.log(logg.substr(6, 11));  //world

const num = 12.2;
console.log(Math.round(num));  //12

const test = '12.2px';
console.log(parseInt(test));   //12
console.log(parseFloat(test)); //12.2