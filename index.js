const { wrapError, ErrorLevelEnum } = require('graceful-error');

function jsonParse(text, options = {}) {
  let data;
  let error;

  try {
    data = JSON.parse(text, options.reviver);
  } catch (err) {
    error = wrapError(err, {
      code: 'ERR_JSON_PARSE_SYNTAX_ERROR',
      level: ErrorLevelEnum.ERROR,
    });
  }

  return { error, data };
}

module.exports = jsonParse;
