# graceful-json-parse

## Install

```bash
npm install graceful-json-parse
```

## API

### 1、callbackJsonParse

```js
const { callbackJsonParse } = require("graceful-json-parse");

callbackJsonParse("{}", function (err, result) {
  if (err) {
    // TODO
  }
  // your code
});
```

### 2、tupleJsonParse

```js
const { tupleJsonParse } = require("graceful-json-parse");

const [err, result] = tupleJsonParse("{}");
```
