// Задачи с собеседований:

let x = 5;
alert( x++ ); // '5'
alert( ++x ); // '6'

// [] + false - null + true
console.log([] + false - null + true);   // 'NaN'

let y = 1;
let c = y = 2;
alert(c);        // '2'

console.log([] + 1 + 2);    // '12'

alert('1'[0]);    // '1'

console.log(2 && 1 && null && 0 && undefined);  // 'null'
// 'И' запинается на лжи
// 'ИЛИ' запинается на правде

console.log(!!(1 && 2) === (1 && 2));   // 'false'

alert(null || 2 && 3 || 4);   // '3'

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);   // 'false'

alert( +'infinity' );   // NaN

console.log('Ёжик' > 'яблоко');    // 'false

console.log(0 || '' || 2 || undefined || true || false);  // '2'