function isJSON(stringToTest) {
    try {
        let json = JSON.parse(stringToTest);
        return true;
    } catch (error) {
        return false;
    }
}

console.log(isJSON('{"name": "Michael", "age": 45}')); // true
console.log(isJSON('{name: "Michael", age: 45}'));// false
console.log(isJSON('false')); // true
console.log(isJSON('abc'));// false
