function isJSON (jsonStr) {
  try {
    const obj = JSON.parse(jsonStr);
    console.log('true');
  } catch (error) {
    console.log('false');
  }
}

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false
