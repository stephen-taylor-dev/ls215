/*

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly


Problem
Input: string array or object representing the sentence skelaton and where a word grammer should be used
Output: string 

Exampels Tests Cases

Template 1
The "adjectives" brown "nouns" "adverbs"
"verbs" the "adjectives" "adjectives"
"nouns", who "adverbs" "verbs" his
"nouns" and "verbs" around.

Template 2
The "noun" "verb" the "noun"'s "noun".

Questions:
Do repaced words with apostrophes need to be able to handle correct pluralization.
Do we need it to only work with the example replacement texts?
Are we always given a template? what to do if not?
Are new lines in the output important does it need to look exazctly the sameh
What about case senitivity 

Data structure:
The replacement text
object with arrays of string

Template 
string with replacemnet keys in the template


Algorithm:
High level
1. Initale output string
2. Iterate over every word
3. Replace word with a random replacement word if it matches one of the replacement keys

Low level
1. Split string into words array by space
2. Iterate over each word in words array, transform replacements to random words where they should
  - if word is a key with an array as a value
    - randomly sample element from the array for the word type
    - return this word to map iteration
  - else if word is not to be replaced
    - return current word to iteration
3. return string of processed words array using Join back array using spaces.

randomArrayElement function, 
takes, an array as arg and samples random element
  - Use Math.random to get random number betwwn 0 and 1
  - Multiply that by lenght of array argument 
  - use integer to get element from the array argument
  - return sampled element


*/

const REPLACEMENTS = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
}

const template1 = 'The adjectives brown nouns adverbs verbs the adjectives adjectives nouns, who adverbs verbs his nouns and verbs around.'

const template2 = "The nouns verbs the nouns's nouns."

function madlibs(template) {
  return template.split(" ").map(word => {
    let key = word.replace(/[^a-z]/gi, '');
    if (key in REPLACEMENTS) {
      let text = sampleRandomElement(REPLACEMENTS[key]);
      word = word.replace(key, text);
    }
    return word;
  }).join(' ');
}

function sampleRandomElement(arr) {
  let random = Math.random();
  let idx = parseInt(arr.length * random, 10);
  return arr[idx];
}

console.log(madlibs(template1));
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

console.log(madlibs(template1));
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".