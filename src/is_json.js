function isJSON(string) {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
}


console.log(isJSON('{"name": "Michael", "age": 45}')); // true
console.log(isJSON('{name: "Michael", age: 45}')); // false
console.log(isJSON('false')); // true
console.log(isJSON('abc')); // false
