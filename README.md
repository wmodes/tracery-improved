# tracery
Tracery: a story-grammar generation library for javascript

This is an improved version of [v buckenham](https://github.com/v21/tracery)'s attempt to package up Kate Compton's [Tracery](https://github.com/galaxykate/tracery/) as a Node library.

## Improvement

In this modified version of Tracery, we've enhanced the symbol selection mechanism to ensure that symbols are not reused until all options have been exhausted. The original Tracery had a tendency to reuse symbols, resulting in repetitive text expansion. Our improvements address this issue by implementing a rule cycling strategy that marks symbols as used and cycles through all available options before reusing any. This ensures more varied and natural text generation, providing a richer and more dynamic text.

## Installation

This is hosted at npm, so it can be installed like so:

```bash
$ npm install tracery-grammar --save
```

## Example usage

```javascript
const tracery = require('tracery-improved');

const grammar = tracery.createGrammar({
  'animal': ['panda','fox','capybara','iguana'],
  'emotion': ['sad','happy','angry','jealous'],
  'origin':['I am #emotion.a# #animal#.'],
});

grammar.addModifiers(tracery.baseEngModifiers); 

console.log(grammar.flatten('#origin#'));
```

## Example Output

From the grammar:

```js
const rawGrammar = {
  origin: ["#sentence#"],
  sentence: ["The #animal# #action#s in the #place#.", "#animal.a.capitalize# loves to #action# in the #place#.", "#animal.capitalize#s often #action# around the #place#."],
  animal: ["cat", "dog", "rabbit", "elephant", "lion"],
  action: ["jump", "run", "sleep", "eat", "play"],
  place: ["park", "forest", "zoo", "garden", "house"]
};
```

Repeated expansion produce:

```plaintext
1: A rabbit loves to jump in the garden.
2: The elephant plays in the park.
3: Dogs often eat around the house.
4: The cat sleeps in the forest.
5: Lions often run around the zoo.
6: An elephant loves to jump in the park.
7: The lion eats in the zoo.
8: Dogs often play around the house.
9: A cat loves to run in the forest.
10: Rabbits often sleep around the garden.
```
