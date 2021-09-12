const test = require('ava');
const globals = require('..');

test('globals', t => {
  t.is(typeof globals, 'object');
  t.is(globals['@reduxjs/toolkit'], 'RTK');
});
