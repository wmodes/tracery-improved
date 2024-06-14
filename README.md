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

Sample output:

```plaintext
1: Cats often run around the zoo.
2: A dog jumps at the garden.
3: The rabbit eats in the beach.
4: The elephant plays in the park.
5: A lion sleeps at the forest.
6: Rabbits often play around the forest.
7: The cat sleeps in the beach.
8: A elephant jumps at the zoo.
9: Lions often run around the park.
10: Dogs often eat around the garden.
```
