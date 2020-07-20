function jsonParse(text, options, callback) {
  if (arguments.length === 2) {
    callback = options;
    options = {};
  }

  try {
    const data = JSON.parse(text, options.reviver);
    callback(undefined, data);
  } catch (err) {
    return callback(err);
  }
}

module.exports = jsonParse;
