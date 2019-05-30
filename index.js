function isJSON(str) {
    try {
        JSON.parse(str);
        return true
    } catch (error) {
        return false;
    }
}

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false