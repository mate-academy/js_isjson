function isJSON(str) {
    try {
        JSON.parse(str);
        console.log(true);
        return true;
    } catch (e) {
        console.log(false);
        return false;
    }
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{name: "Michael", age: 45}');
isJSON('false');
isJSON('abc');