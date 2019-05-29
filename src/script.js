'use strict';

function isJSON(str) {
  try {
    JSON.parse(str);
    console.log(true);
  } catch(e) {
    console.log(false);
  }
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{"name": "Michael", age: 45}');
isJSON('false');
isJSON('abc');
