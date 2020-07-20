## Install

```bash
npm install graceful-json-parse
```

## API

### 1、jsonParse(jsonString[, options])

#### Parameters

- jsonString: The string to parse as JSON.
- options(optional)
  - options.reviver: If a function, this prescribes how the value originally produced by parsing is transformed, before being returned. more info about this param in [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter)

#### Return value

object {error, data}

- error: should be an Error object in case of error or undefined in case of success
- data: should be the object corresponding to the given JSON text or undefined in case of error

#### Example

```js
const jsonParse = require("graceful-json-parse");

const result = jsonParse("{}");
```

### 2、jsonParse(jsonString[, options])

The parameters and return value is the same as above.

```js
const jsonParse = require("graceful-json-parse/tuple");

const [error, data] = jsonParse("{}");
```

### 3、jsonParse(jsonString[, options], callback)

The parameters and return value is the same as above.

```js
const jsonParse = require("graceful-json-parse/callback");

jsonParse("{}", function (error, data) {
  // your code
});
```
