"use strict";

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';


/*

Sentence ends with
. ! ?
ending char part of sentence

Sentence starts with
word char

words
word is any character other than space . ! ? 
word delimter is one or more space


output the longest sentence
output count of words in longest sentence

*/

// function longestSentence(text) {
//   // Find all the sentences.
//   const sentences = text.match(/\w[^.!?]+[.!?]/g);

//   // Initialze variable for index of longest sentence found
//   let longestSentenceIndex;

//   // Find the number of words in the longest sentence
//   let numberOfWords = sentences.reduce((longestWordCount, sentence, index) => {
//     // Find num of words in sentence
//     let sentenceWordCount = sentence.split(/\s+/).length;

//     // Check if current sentence is longer than longest seen
//     if (longestWordCount < sentenceWordCount) {
//       longestSentenceIndex = index;
//       return sentenceWordCount;
//     }

//     return longestWordCount;
//   }, 0);

//   // Output sentence and count to console
//   console.log(sentences[longestSentenceIndex]);
//   console.log(`\nThe longest sentence has ${numberOfWords} words.`);
// }

// longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.


function foo(list) {
  return list.map(function (word) {
    return word.match(/[aeiou]/gi) || [];
  }).reduce(function (acc, letterList) {
    console.log(letterList)
    return acc + letterList.length;
  }, 0);
}

console.log(foo(['cart', 'truck', 'cart', 'train']));
console.log(foo(['apple', 'banana', 'orange']));
console.log(foo(['a', 'b', 'c']));
console.log(foo(['a', 'e', 'i', 'o', 'u']));