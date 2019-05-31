function isJSON(str) {
    let result = true;
    try {
      JSON.parse(str);
    } catch(err) {
      return !result;
    }
    return result;
  }
  
  isJSON('{"name": "Michael", "age": 45}'); // true
  isJSON('{name: "Michael", age: 45}'); // false
  isJSON('false'); // true
  isJSON('abc'); // false 