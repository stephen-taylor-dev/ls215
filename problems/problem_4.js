/* 
# Problem
- Input: string mixed with numbers and separators
- Output: array of numbers

- Rules
  - Range are inclusive
  - Types of separators ["-", ":", ".."]
  - `-`, `:`, `..` dashes
    - indicates all numbers in range from value before 
      separator to and including after the separator
  - `,`
    - indicates the next number in the sequnce 
    - if number is less than number before separator
      round up to the next highest tens place from previous number 

  - string will also contain spaces

  - assume all character are sperpaters or digits
  - how to handle empty string -> return empty array?
  - return numbers as an array?
  - what happens if we have mulitple separators in a row

# Test Cases / Examples
"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

1, 3, 7, 2, 4, 1
1:5:2

1 5 2
# Data structures
String

output array list of numbers


# Algorithm
initialze an empty numbers array
split string into array of digits

loop over array of digits with index 
find the separator
  find index of number in orignal string
    add current length of digit + 1 to get the separator

  check if the digit variable is greater than the last digit in the digits array
      if so get the digits nextplace value

  process separator type
    if not separtor type go to next iteration

    if separator is comma
      process number after comm

    else different separter
      process number after other symbols

  slice original string to remove current digit and separtor
    start at index of length of digit + 1 for separator to the end

    
return the array of digits

Helpers
  process number after comma     
    add to the current digit number value to the numbers array


    process number after other symbols
    taktes two args
      - last argument in nubmers array + 1
      - next element in the digits array 
    loops from value of first element + 1 all up to and including the second argument 
      add each number to the numbers array


findingNextPlaceValue
7 2 12

104 2 112
104 02 202
3 1 11

*/
// function increasingNumbers(string) {
//   let numbers = [];
//   let digits = string.match(/[\d]+/g);

//   digits.forEach(digit => {
//     let separatorIndex = string.indexOf(digit) + digit.length;
//     let separator = string[separatorIndex];
//     let number = Number(digit);
//     if (Number(digit) > numbers[numbers.length - 1]) {
//       // number = getDigitPlaceValue(digit);
//     }

//     if (separator && separator.match(/[,.-]/g)) {
//       if (separator === ',') {
//         numbers.push(number);
//       } else {
//         let start = numbers[numbers.length - 1] + 1;
//         processNumberAfterSymbol(start, number, digits);
//       }
//     }

//     string = string.slice(digit.length + 1);
//   });

//   return numbers;
// }

// function processNumberAfterSymbol(start, last, digits) {
//   for (let num = start; num <= last; num += 1) {
//     digits.push(num);
//   }
// }

// console.log(increasingNumbers("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
// console.log(increasingNumbers("1-3, 1-2")); // [1, 2, 3, 11, 12]
// console.log(increasingNumbers("1:5:2")); // [1, 2, 3, 4, 5, 6, ... 12]
// console.log(increasingNumbers("104-2")); // [104, 105, ... 112]
// console.log(increasingNumbers("104-02")); // [104, 105, ... 202]
// console.log(increasingNumbers("545, 64:11")); // [545, 564, 565, .. 611]
// console.log(increasingNumbers("")); // []




function fillNumList(str) {
  const array  = convertInputIntoArray(str);
  const values = replaceNumsByRealValue(array);
  const result = convertRangeIntoNumberSequence(values);

  return result;
}

function convertInputIntoArray(str) {
  const string = standardizeRangeDelimiters(str);
  return splitString(string);
}

function standardizeRangeDelimiters(str) {
  return str.replace(/(\.\.|:)/g, '-');
}

function splitString(str) {
  return str.split(',')
            .flatMap(elem => elem.trim().match(/\d+|-/g))
}

function replaceNumsByRealValue(arr) {
  let previousNum = Number(arr[0]);
  let previousDigits;
  let currentNum;
  let numLength;

  return arr.map((numStr, idx) => {
    if (numStr === '-') return numStr;

    numLength   = numStr.length;
    currentNum  = Number(numStr);
    previousDigits = Number(String(previousNum).slice(-numLength));

    let replacedNum = previousNum - previousDigits + currentNum;
    
    if (
      currentNum < previousDigits
      || (currentNum === previousDigits && idx !== 0)
    ) {
      replacedNum += 10**numLength;
    }

    previousNum = replacedNum;
    return replacedNum;
  });
}

function convertRangeIntoNumberSequence(arr) {
  let sequence = [];

  arr.forEach((num, idx) => {
    if (num === '-') return;

    if (arr[idx + 1] !== '-') {
      sequence.push(num);
    } else {
      let endNum = arr[idx + 2];
      sequence = [...sequence, ...createNumberSequence(num, endNum)]
    }
  });

  return sequence;
}

function createNumberSequence(start, end) {
  const sequence = [];
  for (let num = start; num < end; num += 1) {
    sequence.push(num);
  }

  return sequence;
}
console.log(fillNumList("1, 3, 7, 2, 4, 1")); // [545, 564, 565, .. 611]
