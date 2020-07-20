const test = require('ava');
const jsonParse = require('../callback');

const s1 = '{"foo":"bar", "a": 1}';
const s2 = '{"foo":"bar", "a": 1';

test(`json parse with callback -> ${s1}`, (t) => {
  jsonParse(s1, function (err, data) {
    t.is(err, undefined);
    t.is(data.foo, 'bar');
    t.is(data.a, 1);
  });
});

test(`json parse with callback and reviver -> ${s1}`, (t) => {
  jsonParse(
    s1,
    {
      reviver: function (key, value) {
        if (typeof value === 'number') {
          return value * 2;
        } else {
          return value;
        }
      },
    },
    function (err, data) {
      t.is(err, undefined);
      t.is(data.foo, 'bar');
      t.is(data.a, 2);
    }
  );
});

test(`json parse with callback -> ${s2}`, (t) => {
  jsonParse(s2, function (err, data) {
    t.true(err instanceof Error);
    t.is(data, undefined);
  });
});
