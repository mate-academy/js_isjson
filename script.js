'use strict';

function isJSON(s) {
    try {
        JSON.parse(s);
        return true;
    } catch (e) {
        return false;
    }
}
console.log(isJSON('{"name": "Michael", "age": 45}'));  // true
console.log(isJSON('{name: "Michael", age: 45}'));  // false
console.log(isJSON('false'));  // true
console.log(isJSON('abc'));  // false
