'use strict';

module.exports = function (message) {

    if (process.env.NODE_ENV == 'development') {
        alert('DEV!')
    }
    alert(`Welcome ${message}`);
};