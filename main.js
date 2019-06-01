'use strict';

function isJSON(json) {
  try {
    JSON.parse(json)
    return true;
  } catch {
    return false;
  }
};

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false