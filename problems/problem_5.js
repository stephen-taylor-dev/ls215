/*
# Problem
Encoding
- Input: String, integer representing number of rows
- output: string, encoded message

Decoding
- input: encoded string, integer reprsenting numbers of row
- ouput: string, decoded message

- Rules
  - ignores spaces
  - ignore punction and any characters that are not digts or letters
  - empty string should return empty string
  - messages shorter than rail length should return same input 


# Examples / Test cases
WE ARE DISCOVERED FLEE AT ONCE, 3 rails

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
WEAREDISCOVEREDFLEEATONCE
WECRLTE ERDSOEEFEAOC AIVDEN
7        9          9
25 chars here


W . . . . . I . . . . . R . . . . . E . . . . . E
. E . . . D . S . . . E . E . . . E   A . . . C .
. . A . E . . . C . V . . . D . L . . . T . N . .
. . . R . . . . . O . . . . . F . . . . . O . . .
WEAREDISCOVEREDFLEEATONCE
wiree edseeeac aecvdltn rofo

# Data Structures
String 

Array of arrays
3 rows
[['W, 'E', ... CRLTE], [ERDSOEEFE], [AOCAIVDEN]] 

Flatten to combine them into one array of charcer

Return as a joined string

# Algorithm
initiale array with n-rows of nested empty arrays 
  initialze empty array
  iterate row times
    push an empty to to the main array

flag ascending true
counter index
current element index 
iterate over input string
  get counter index of sub array to put letter in 
    modulo of curent element index of char by row number

  append element to the subarray
  if counter === 0 
    ascending equals true
  if counter === num of rows - 1 
    ascending eqauls false

  if ascending
    increment counter by 1
  else 
    decrement counter by 1

flatten the array 
join as a string

*/ 

function railCipherEncode(text, rails) {
  if (rails <= 1 || rails > text.length) return text;
  text = text.replace(/[^A-Z\d]/gi, '');
  return railCipher(text, rails).flat().join('');
}

function railCipher(text, rails) {
  let railEncodings = [];

  for (let _ = 0; _ < rails; _ += 1) {
    railEncodings.push([]);
  }

  let ascending = true;
  let railIndex = 0;
  for (let textIndex = 0; textIndex < text.length; textIndex += 1) {
    railEncodings[railIndex].push(text[textIndex]);

    if (railIndex === 0) {
      ascending = true;
    } else if (railIndex === rails - 1) {
      ascending = false;
    }
    ascending ? railIndex += 1 : railIndex -= 1;
  }

  return railEncodings;
}

function railCipherDecode(text, rails) {
  if (rails <= 1 || rails > text.length) return text;
  text = text.replace(/[^A-Z\d]/gi, '');
  
  let items = [];
  for (let i = 0; i < text.length; i += 1) {
    items.push([]);
  }

  let encodings = railCipher(text, rails);

  [...text].forEach((char, index) => {
    items[encodings[index]].push(char)
  })
  console.log(items.flat().join(''))
}

// console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
// console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 4) === 'WIREEEDSEEEACAECVDLTNROFO');

// console.log(railCipherEncode('One rail, only one rail', 1) === 'One rail, only one rail');
// console.log(railCipherEncode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');

// console.log(railCipherEncode('EXERCISES', 4) === 'ESXIEECSR');
// console.log(railCipherEncode('More rails than letters', 24) === 'More rails than letters');


console.log(railCipherDecode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');
// console.log(railCipherDecode('ABCDEFGHIJKLMNOP', 1) === 'ABCDEFGHIJKLMNOP');
// console.log(railCipherDecode('XXXXXXXXXOOOOOOOOO', 2) === 'XOXOXOXOXOXOXOXOXO');