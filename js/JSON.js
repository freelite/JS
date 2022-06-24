'use strict';

const persone = {
    name: 'Dmitriy',
    tel: '+78009596677',
    parents: {
        mom: 'Elena',
        dad: 'Igor`'
    }
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Helen';
console.log(persone);
console.log(clone);