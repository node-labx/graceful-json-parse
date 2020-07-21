const { wrapError, ErrorLevelEnum } = require('graceful-error');

function jsonParse(text, options, callback) {
  if (arguments.length === 2) {
    callback = options;
    options = {};
  }

  try {
    const data = JSON.parse(text, options.reviver);
    callback(undefined, data);
  } catch (err) {
    return callback(
      wrapError(err, {
        code: 'ERR_JSON_PARSE_SYNTAX_ERROR',
        level: ErrorLevelEnum.ERROR,
      })
    );
  }
}

module.exports = jsonParse;
