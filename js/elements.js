'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      butn = document.querySelectorAll('.btn'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// box.style.cssText = `background-color: blue; width: 500px`;

// btns[1].style.borderRadius = '100%';
// btns[1].style.backgroundColor = 'red';

// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = 'green'; // Можно так
// }
// for (let i = 0; i < btns.length; i++) {
//     btns[i].style.borderRadius = '100%';     // можно так
// }

butn.forEach(item => {
    item.style.borderRadius = '100%';
});
butn.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я!');
div.classList.add('red');
wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before();
// hearts[0].after();
// circles[0].remove();

div.innerHTML = '<h3>Написано на JS!</h3>';
// div.textContent = 'Написано на JS!';

div.insertAdjacentHTML('afterend', '<h4>Я хуею...</h4>');