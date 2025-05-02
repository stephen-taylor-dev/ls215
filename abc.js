/*
SECOND ATTEMPT

problem
input: string
output: boolean

rules
- letter case insensitive
- words cannot use both letters from a block
- a letter from a block can only be used once

examples:
"B:O X:K D:Q C:P N:A G:T R:E F:S J:W H:U V:I L:Y Z:M"

BATCH
bo
na
gt
cp
hu

questions 
1 arg always?
always be a string
always contain alphabetic chars? should ignore them or check if word can be spelled wtih them ( such as punction white space )
will we be given empty string

data structure



algorithm
high level
iterate over the string, check if a block is availble for the letter
  remove from the available blocks
  keep checking rest of letters in string
if not return false

detailed implementation
uppercase input string
iterate over input string
  check if some block in the BLOCKS contains the current letter
    delete current index of found block
    if so continue loop
    if not return false
return true

*/


// return false or idx of the value
function indexOfLetterBlock(letter, blocks) {
  let found;
  blocks.some((block, idx) => {
    if (block.includes(letter)) {
      found = idx;
      return true;
    }
  });
  return found;
}

function isBlockWord(word) {
  const blocks = [
    [ 'B', 'O' ], [ 'X', 'K' ],
    [ 'D', 'Q' ], [ 'C', 'P' ],
    [ 'N', 'A' ], [ 'G', 'T' ],
    [ 'R', 'E' ], [ 'F', 'S' ],
    [ 'J', 'W' ], [ 'H', 'U' ],
    [ 'V', 'I' ], [ 'L', 'Y' ],
    [ 'Z', 'M' ]
  ];

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];
    let blockIdx = indexOfLetterBlock(char, blocks);
    if (blockIdx !== undefined) {
      blocks.splice(blockIdx, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

// // case insensitive
console.log(isBlockWord('BatCH'));      // true
console.log(isBlockWord('ButCH'));      // false
