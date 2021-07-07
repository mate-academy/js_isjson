'use stirct'
let isJSON  = function(string) {
    try {
        JSON.parse(string);
    } catch(error) {
        return false;
    }
    return true;
};

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false
