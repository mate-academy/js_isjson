function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch {
        return false;
    }
}
isJSON('{name: "Michael", age: 45}');
