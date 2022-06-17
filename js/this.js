'use strict';

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();

function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}
let diman = new User('Диман', 34);

function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

const user = {
    name: 'Diman'
};

sayName.call(user, 'Cvetikov');
sayName.apply(user, ['Cvetikov']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined 
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', e => {
    e.target.style.backgroundColor = 'red';
});

const ob = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

ob.sayNumber();

const d = a => a * 2;
console.log(d(200));