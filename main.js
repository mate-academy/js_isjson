const  isJSON = function(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

console.log(isJSON('{"name": "Michael", "age": 45}'));
console.log(isJSON('{name: "Michael", "age": 45}'));
