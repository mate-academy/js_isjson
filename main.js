
function isJSON(obj) {
  let state;
  try {
    JSON.parse(obj);
    state = true;
  } catch (er) {
    state = false;
  }

  return state;
}
