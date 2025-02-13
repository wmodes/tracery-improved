# tracery-improved  
An enhanced version of Tracery, a story-grammar generation library for JavaScript.  

This is an improved version of [v buckenham](https://github.com/v21/tracery)'s Node.js port of Kate Compton's original [Tracery](https://github.com/galaxykate/tracery/). Tracery is a powerful generative text library, often used for procedural storytelling, chatbots, and creative coding.  

## Improvements  

This version enhances the symbol selection mechanism to **avoid premature reuse of symbols**, leading to **more varied and natural text generation**.  

### Key Changes:  
- **Eliminates early symbol reuse** by cycling through all available options before repeating.  
- **Prevents repetitive patterns** that were common in the original implementation.  
- **Maintains Tracery’s flexibility and ease of use** while improving output diversity.  

## Installation  

This package is available on npm as ```tracery-improved``` and can be installed with:  

```bash
npm install tracery-improved
```  

## Example Usage  

```javascript
const tracery = require('tracery-improved');

const grammar = tracery.createGrammar({
  animal: ['panda', 'fox', 'capybara', 'iguana'],
  emotion: ['sad', 'happy', 'angry', 'jealous'],
  origin: ['I am #emotion.a# #animal#.']
});

grammar.addModifiers(tracery.baseEngModifiers); 

console.log(grammar.flatten('#origin#'));
```  

## Example Output  

Using this grammar:  

```javascript
const rawGrammar = {
  origin: ["#sentence#"],
  sentence: [
    "The #animal# #action#s in the #place#.", 
    "#animal.a.capitalize# loves to #action# in the #place#.", 
    "#animal.capitalize#s often #action# around the #place#."
  ],
  animal: ["cat", "dog", "rabbit", "elephant", "lion"],
  action: ["jump", "run", "sleep", "eat", "play"],
  place: ["park", "forest", "zoo", "garden", "house"]
};
```  

Repeated expansions might produce:  

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

## Acknowledgments  

- **[Kate Compton](https://github.com/galaxykate)** – Original author of Tracery.  
- **[v21](https://github.com/v21)** – Packaged Tracery as a Node.js module.  
- This version builds on their work to further improve output diversity.  
