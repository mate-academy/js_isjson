'use strict';

function isJSON(str) {
  try {

  const parsedStr = JSON.parse(str);

  } catch (err) {

    return false;

  }

  return true;
}

console.log(isJSON('{"name": "Michael", "age": 45}')); // true
console.log(isJSON('{name: "Michael", age: 45}')); // false
console.log(isJSON('false')); // true
console.log(isJSON('abc')); // false
