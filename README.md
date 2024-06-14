# tracery
Tracery: a story-grammar generation library for javascript

This is an improved version of [v buckenham's](https://github.com/v21/tracery) attempt to package up Kate Compton's [Tracery](https://github.com/galaxykate/tracery/) as a Node library.

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
I am a happy iguana.
I am an angry fox.
I am a sad capybara.
```
