// Анимация при помощи setTimeout и setInterval

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

const myAnimation = () => {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 5);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
};
btn.addEventListener('click', myAnimation);

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);