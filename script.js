function isJSON (str) {
  let res = true;
  try {
    let json = JSON.parse(str);
  } catch (error) {
    res = false;
  }
  console.log(res);
}

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false