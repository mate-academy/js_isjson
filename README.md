# isJSON
GH-Pages https://sherjlok15.github.io/js_is-json/

Create a function called `isJSON` that accepts a string and returns `true` if the string is valid JSON and `false` otherwise. Sample usage:

```js
isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON('false'); // true
isJSON('abc'); // false
```

To implement `isJSON`, use `JSON.parse` and graceful error handling.
