'use strict';

function isJSON(toCheck) {
  try {
    JSON.parse(toCheck);
    return true;
  } catch {
    return false;
  }
}

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false
