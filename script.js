const isJSON = (string) => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
};

console.log(isJSON('{"name": "Michael", "age": 45}')); // true
console.log(isJSON('{name: "Michael", age: 45}')); // false
console.log(isJSON('false')); // true
console.log(isJSON('abc')); // false