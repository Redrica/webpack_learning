// const header = 'Some header';
//
// const func = () => parseInt(header, 10);
// func();
// console.log(func());
// console.log('Header component');

import $ from 'jquery';

$('<h1 />')
    .text('Hello world from JQuery')
    .css({
        textAlign: 'center',
        color: 'darksalmon',
        textTransform: 'uppercase'
    })
    .appendTo($('header'));