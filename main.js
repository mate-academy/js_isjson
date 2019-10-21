function isJson(str) {
  try {
    if (JSON.parse(str)) {
      return true; 
    }
  } catch (err) {
    return false;
  }
}

