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
var tracery = require('tracery-grammar');

var grammar = tracery.createGrammar({
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
  sentence: ["The #animal# #action#s in the #place#.", "A #animal# loves to #action# in the #place#.", "#animal.capitalize#s often #action# around the #place#."],
  animal: ["cat", "dog", "rabbit", "elephant", "lion"],
  action: ["jump", "run", "sleep", "eat", "play"],
  place: ["park", "forest", "zoo", "garden", "house"]
};
```

Repeated expansion produce:

```plaintext
1: A dog loves to play in the garden.
2: The lion jumps in the forest.
3: Rabbits often sleep around the park.
4: Elephants often run around the zoo.
5: A cat loves to eat in the house.
6: The elephant jumps in the house.
7: A cat loves to sleep in the zoo.
8: Rabbits often run around the forest.
9: The lion plays in the garden.
10: The dog eats in the park.
```
