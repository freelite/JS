function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}!`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел!`);
};

const diman = new User('Diman', 34);
const des = new User('Denis', 35);

diman.hello();
des.hello();

diman.exit();
des.exit();

console.log(diman);
console.log(des);