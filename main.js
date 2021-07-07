'use strict'

function isJSON(json) {
  try {
    JSON.parse(json)
  } catch (error) {

    return false;
  }
  return true;
}