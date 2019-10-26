const isJSON = function(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}