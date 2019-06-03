const jsonPatern = /(^{("\w+":\s"?\w+"?(,\s)?)+}$|false|true)/;

function isJSON(str) {
  console.log(jsonPatern.test(str));
}

isJSON('{"name": "Michael", "age": 45}');
isJSON('{name: "Michael", age: 45}');
isJSON('false');
isJSON('abc');
