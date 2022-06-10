"use strict";  //Строгий режим

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('WTF???');
console.log(num); //20

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));   //7
// console.log(calc(5, 6));   //11
// console.log(calc(10, 5));  //15

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);  //50

const logger = function() {
    console.log('hello!');
};

logger();

// const calc = (a, b) => a + b;

const calc = (a, b) => {
    return a + b;
};
console.log(calc(2, 5));  //7

function hello() {
    console.log('Hello world!');
}

hello();

function hi() {
    console.log('Say hi!');
}

hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

    function compareNum(a, b) {
        return a - b;
    }

    console.log(sorted);