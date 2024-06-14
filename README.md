# tracery
Tracery: a story-grammar generation library for javascript

This is an improved version of [v buckenham's](https://github.com/v21/tracery) attempt to package up Kate Compton's [Tracery](https://github.com/galaxykate/tracery/) as a Node library.

## Improvement

In this version of Tracery, we have enhanced the rule selection mechanism to ensure that rules are not reused until all options have been exhausted. This improvement addresses the issue of rapidly exhausting top-level rules, thereby enabling more diverse and dynamic text generation. By implementing a cycling strategy for rule selection, our modified Tracery ensures that all rules are utilized more effectively, leading to richer and more varied outputs.

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
