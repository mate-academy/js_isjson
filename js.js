'use strict';

function isJSON(example) {
    try {
        JSON.parse(example);
        return true;
    }
    catch (error) {
        return false;
    }
}

console.log(isJSON('{"name": "Michael", "age": 45}'));
console.log(isJSON('{name: "Michael", age: 45}'));
console.log(isJSON('false'));
console.log(isJSON('abc'));