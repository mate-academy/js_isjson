function isJSON(str) {
    if (typeof text !== "string") { 
        return false; 
    } 
    try { 
        JSON.parse(str);         
    } catch (error) { 
        return false; 
    } 
    return true; 
}

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false