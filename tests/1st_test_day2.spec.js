const {test, expect} = require('@playwright/test');
const {hello, universe} = require('./Demo/hello');

console.log(hello());
console.log(universe());