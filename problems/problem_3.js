/*
# Problem:
- Input: string 
- Output: output boolean true or false

- alphabet blocks contain all leters in pairs

- Questions
  - how do handle empty string
  - how do handle non-string inputs 
  - will inputs contain non-alphabetic characters


- Rules
  - word must be spelled from letters from the blocks
  - word can only use 1 letter from each block
  - word can use letter from block only once
  - letters are case insenitive - ignore case

# Test Cases/ Examples
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

BATCH
B:O
N:A
G:T
C:P
H:U

BUTCH
B:O
H:U 
G:T
C:P
H:U * problem *

ant 
N:A
N:A
T

isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

Data Structure:
array of input words
['B', 'U', 'T', 'C', 'H]

Main spelling pairs data strucutre as an object of key value pairs
{B: 'O', 
 O: 'B',
 X: 'K',
 K: 'X',
 D: 'Q',
 Q: 'D',
 C: 'P',
 P: 'C', 
 N: 'A',
 A: 'N',
 G: 'T',
 T: 'G',
 R: 'E',
 E: 'R',
 F: 'S',
 S: 'F',
 J: 'W',
 W: 'J',
 H: 'U',
 U: 'H',
 V: 'I',
 I: 'V',
 L: 'Y',
 Y: 'L',
 Z: 'M',
 M: 'Z'
}

Check if vlaue 'A' is in our seen letters
Array of seen letters
[A]

Not allowed letters array
[N]

output boolean

# Algorithm:
if no argument or 
  empty string or 
  string contains non-alphabetic char
    return false

convert to input word to uppercase
break string into array of chars

initialze a usedLetters array
initialze a blockUsedLetters array
iterate over the characters
  get the char related letter for current letter
  if current letter is in usedLetters or
  if current letter is in  blockUsedLetters
    return false
  else
    add the current letter to usedLetters
    add the related letter to blockUsedLetters

if we get to the end of the loop return true

usedLetters ['B', 'A', 'T', C, H]
blockUsedLetters ['O', 'N', 'G' P, U]
['B', 'A', 'T', 'C', 'H]
B O
A N
T G
C P
H U

usedLetters [A]
blockUsedLetters [N]
[A N T]
A N
T G
return false
*/
const SPELLING_BLOCKS = {B: 'O', O: 'B', X: 'K', K: 'X', D: 'Q', Q: 'D',
                         C: 'P', P: 'C', N: 'A', A: 'N', G: 'T', T: 'G',
                         R: 'E', E: 'R', F: 'S', S: 'F', J: 'W', W: 'J',
                         H: 'U', U: 'H', V: 'I', I: 'V', L: 'Y', Y: 'L',
                         Z: 'M', M: 'Z'};

function isBlockWord(string) {
  string = string.toUpperCase();
  
  const usedLetters = [];
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    let relatedLetter = SPELLING_BLOCKS[char];

    if (usedLetters.includes(char)) return false;
    
    usedLetters.push(char, relatedLetter);
  }

  return true;
}

// function isBlockWord(word) {
//   const blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
//   const regExps = blocks.map(block => new RegExp(block.replace(':', '|'), 'gi'));
//   console.log(regExps.every(regExp => console.log((word.match(regExp)) || [])));
//   return regExps.every(regExp => (word.match(regExp) || []).length < 2);
// }

// Happy paths
// Uppercase
console.log(isBlockWord('BATCH') === true);   // true
console.log(isBlockWord('BUTCH') === false);   // false
console.log(isBlockWord('HELLO') === false);   // false
console.log(isBlockWord('JEST') === true);   // true

// // lowercase
console.log(isBlockWord('batch') === true);   // true
console.log(isBlockWord('butch') === false);   // false
console.log(isBlockWord('jest') === true);   // true
console.log(isBlockWord('hello') === false);   // false
