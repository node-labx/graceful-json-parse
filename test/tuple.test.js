const test = require('ava');
const jsonParse = require('../tuple');

const s1 = '{"foo":"bar", "a": 1}';
const s2 = '{"foo":"bar", "a": 1';

test(`json parse and return tuple -> ${s1}`, (t) => {
  const r = jsonParse(s1);
  t.is(r[0], undefined);
  t.is(r[1].foo, 'bar');
  t.is(r[1].a, 1);
});

test(`json parse and return tuple with reviver -> ${s1}`, (t) => {
  const r = jsonParse(s1, {
    reviver: function (key, value) {
      if (typeof value === 'number') {
        return value * 2;
      } else {
        return value;
      }
    },
  });
  t.is(r[0], undefined);
  t.is(r[1].foo, 'bar');
  t.is(r[1].a, 2);
});

test(`json parse and return tuple -> ${s2}`, (t) => {
  const r = jsonParse(s2);
  t.true(r[0] instanceof Error);
  t.is(r[1], undefined);
});
test('json parse and return tuple -> ""', (t) => {
  const r = jsonParse('');
  t.true(r[0] instanceof Error);
  t.is(r[1], undefined);
});

test('json parse and return tuple -> null', (t) => {
  const r = jsonParse(null);
  t.is(r[0], undefined);
  t.is(r[1], null);
});

test('json parse and return tuple -> undefined', (t) => {
  const r = jsonParse(undefined);
  t.true(r[0] instanceof Error);
  t.is(r[1], undefined);
});

test('json parse and return tuple -> 100', (t) => {
  const r = jsonParse(100);
  t.is(r[0], undefined);
  t.is(r[1], 100);
});
