function jsonParse(text, options = {}) {
  let data;
  let error;

  try {
    data = JSON.parse(text, options.reviver);
  } catch (err) {
    error = err;
  }

  return { error, data };
}

module.exports = jsonParse;
