'use strict';

function isJSON(toParse) {
  try {
    JSON.parse(toParse);
    return true;
  } catch {
    return false;
  }
}

console.log(isJSON('{"name": "Michael", "age": 45}')); // true
console.log(isJSON('{name: "Michael", age: 45}')); // false
console.log(isJSON('false')); // true
console.log(isJSON('abc')); // false
