function isJSON(str) {
  let result;  
  try {
      JSON.parse(str)   
    } catch (err) {
      return err;
    }
  return !result;
  }

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON("false"); // true
isJSON("abc"); // false
