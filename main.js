function isJSON(str) {
  try {
    if (JSON.parse(str)) {
      return true;
    }
    throw new Error("false");
  } catch (err) {
    return err;
  }
}

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON("false"); // true
isJSON("abc"); // false
