const test = require('ava');
const jsonParse = require('../index');

const s1 = '{"foo":"bar", "a": 1}';
const s2 = '{"foo":"bar", "a": 1';

test(`json parse and return object -> ${s1}`, (t) => {
  const r = jsonParse(s1);
  t.is(r.error, undefined);
  t.is(r.data.foo, 'bar');
  t.is(r.data.a, 1);
});

test(`json parse and return object with reviver -> ${s1}`, (t) => {
  const r = jsonParse(s1, {
    reviver: function (key, value) {
      if (typeof value === 'number') {
        return value * 2;
      } else {
        return value;
      }
    },
  });
  t.is(r.error, undefined);
  t.is(r.data.foo, 'bar');
  t.is(r.data.a, 2);
});

test(`json parse and return object -> ${s2}`, (t) => {
  const r = jsonParse(s2);
  t.true(r.error instanceof Error);
  t.is(r.data, undefined);
});

test('json parse and return object -> ""', (t) => {
  const r = jsonParse('');
  t.true(r.error instanceof Error);
  t.is(r.data, undefined);
});

test('json parse and return object -> null', (t) => {
  const r = jsonParse(null);
  t.is(r.error, undefined);
  t.is(r.data, null);
});

test('json parse and return object -> undefined', (t) => {
  const r = jsonParse(undefined);
  t.true(r.error instanceof Error);
  t.is(r.data, undefined);
});

test('json parse and return object -> 100', (t) => {
  const r = jsonParse(100);
  t.is(r.error, undefined);
  t.is(r.data, 100);
});
