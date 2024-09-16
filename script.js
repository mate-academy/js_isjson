function isJSON (jsonStr) {
  try {
    JSON.parse(jsonStr);
    return true;
  } catch (error) {
    return false;
  }
}

console.log(isJSON('{"name": "Michael", "age": 45}')); // true
console.log(isJSON('{name: "Michael", age: 45}')); // false
console.log(isJSON('false')); // true
console.log(isJSON('abc')); // false
