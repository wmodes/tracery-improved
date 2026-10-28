// Checks that a rule listed more than once (a weighted rule) is cycled correctly:
// every listing is used once per cycle, and the grammar never runs dry.
const assert = require('assert');
const modulePath = require.resolve('../tracery');
delete require.cache[modulePath];
const tracery = require(modulePath);

function draw(rules, times) {
  const grammar = tracery.createGrammar({ pick: rules });
  const results = [];
  for (let i = 0; i < times; i++) results.push(grammar.flatten('#pick#'));
  return results;
}

// 1. A plain grammar still cycles through every rule before repeating one
const plain = ['a', 'b', 'c', 'd'];
const plainDraws = draw(plain, 100);
for (let cycle = 0; cycle < 25; cycle++) {
  const slice = plainDraws.slice(cycle * 4, cycle * 4 + 4);
  assert.deepStrictEqual([...slice].sort(), plain, `cycle ${cycle} should use each rule once: ${slice}`);
}

// 2. A weighted grammar ("a" listed three times) uses each listing once per cycle,
//    so "a" comes up three times for every one "b", and never undefined
const weighted = ['a', 'a', 'a', 'b'];
const weightedDraws = draw(weighted, 100);
for (let cycle = 0; cycle < 25; cycle++) {
  const slice = weightedDraws.slice(cycle * 4, cycle * 4 + 4);
  assert.deepStrictEqual([...slice].sort(), ['a', 'a', 'a', 'b'], `cycle ${cycle} should be three a and one b: ${slice}`);
}

// 3. Drawing far more times than there are distinct rules must never fail.
//    (Before the fix, a weighted grammar returned "undefined" once its distinct rules were used up.)
const manyListings = ['x', 'y', 'z', 'x', 'y', 'z', 'x'];
const manyDraws = draw(manyListings, 200);
assert.ok(manyDraws.every(text => typeof text === 'string' && text.length > 0 && text !== 'undefined'),
  'every draw should be a real rule');

console.log('weighted rules: all checks passed');
