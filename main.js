function isJSON(obj) {
  try {
    JSON.parse(obj);
    console.log('ok');
  } 
  catch {
    console.log('false');
  }
};

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false