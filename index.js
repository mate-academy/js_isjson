function isJSON(param) {
  try {
    const j = JSON.parse(param);
  } catch(error) {
    return false;
  }

  return true;
}