const modulePath = require.resolve('../tracery');
delete require.cache[modulePath];
const tracery = require(modulePath);

// Define a multilevel grammar
const rawGrammar = {
  origin: ["#sentence#"],
  sentence: ["The #animal# #action#s in the #place#.", "#animal.a.capitalize# loves to #action# in the #place#.", "#animal.capitalize#s often #action# around the #place#."],
  animal: ["cat", "dog", "rabbit", "elephant", "lion"],
  action: ["jump", "run", "sleep", "eat", "play"],
  place: ["park", "forest", "zoo", "garden", "house"]
};

// Create a grammar instance
const grammar = tracery.createGrammar(rawGrammar);

// Add modifiers if needed (optional)
grammar.addModifiers(tracery.baseEngModifiers);

// Function to test the grammar expansion
function testGrammarExpansion() {
  const results = [];

  // Expand the grammar multiple times
  for (let i = 0; i < 10; i++) {
    try {
      const expansion = grammar.flatten("#origin#");
      results.push(expansion);
    } catch (err) {
      console.error(`Error during expansion ${i + 1}:`, err.stack); // Log the stack trace
      results.push(`Error during expansion ${i + 1}: ${err.message}`);
    }
  }

  return results;
}

// Run the test
try {
  const expansions = testGrammarExpansion();
  console.log("Generated Expansions:");
  expansions.forEach((expansion, index) => {
    console.log(`${index + 1}: ${expansion}`);
  });
} catch (err) {
  console.error('Error caught in main execution:', err.stack); // Log the stack trace for any uncaught errors
}