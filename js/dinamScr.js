'use strict';

// Async, defer, динамические скрипты

const p = document.querySelectorAll('p');
console.log(p);

const loadScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
};
loadScript("js/test.js");