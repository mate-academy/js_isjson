const  isJSON = function(str) {
    try {
        obj = JSON.parse(str);
        console.log(obj);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

console.log(isJSON('{"name": "Michael", "age": 45}'));
console.log(isJSON('{name: "Michael", "age": 45}'));
