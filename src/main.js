'use strict';
function isJSON(string) {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  }
  return true;
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{name: "Michael", age: 45}');
isJSON('false');
isJSON('abc');
