"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log(`options`);
    }
};
options.makeTest();  //Запуск функции

const {border, bg} = options.colors;  //Деструктуризация объекта
console.log(border);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
console.log(options.name);

// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(`Свойств в данном объекте: ${counter}`);