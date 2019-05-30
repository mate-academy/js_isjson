'use strict';

function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch(e) {
    return false;
  }
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{"name": "Michael", age: 45}');
isJSON('false');
isJSON('abc');
