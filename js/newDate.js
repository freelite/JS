// const now = new Date('2022-06-17');
    // new Date.parse('2022-06-17');

// console.log(now.setHours(40));
// console.log(now);

// console.log(now.getFullYear()); // Год
// console.log(now.getMonth());    // Месяц
// console.log(now.getDate());     // Число
// console.log(now.getHours());    // Часы
// console.log(now.getUTCHours()); // Часы по часовому поясу

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);