'use strict';

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch(error) {
    console.log(false);
  }
  console.log(true);
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{name: "Michael", age: 45}');
isJSON('false');
isJSON('abc');
