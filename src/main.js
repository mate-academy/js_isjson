'use strict';

function isJSON(string) {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{name: "Michael", age: 45}');
isJSON('false');
isJSON('abc');
