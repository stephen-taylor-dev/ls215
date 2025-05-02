function compress(str) {
  if (arguments.length > 1) str = arguments[0];
  if (typeof str !== 'string') return 'Invalid input.';
  if (str.length === 0) return '';

  let result = '';
  let startIdx = 0;
  let endIdx;

  for (let i = 1; i < str.length; i += 1) {
    // if current char is equal to the last & end of string
    if (str[i] === str[i - 1] && str[i + 1] === undefined) {
      // get substr and its length
      if (i === str.length - 1) {
        let substr = str.slice(startIdx, endIdx);
      } else {
        continue;
      }
    // if current char is equal to the last (not end of string)
    } else if (str[i] === str[i - 1]) {
      continue;
    // if current char is not equal to the last
    else {
      // get substr and its length
      endIdx = i;
      if (str[i] !== str[i + 1]) {
        let substr = str.slice(startIdx, endIdx);
      }
      startIdx = i;
      let substrLength = substr.length;
      // console.log(substr, substrLength);
      if (substrLength !== 1) {
        result += substr + String(substrLength);
      } else {
        result += substr;
      }
    }
  }

  return result;
}

console.log(compress('aabccc'));          // 'a2bc3'
// compress('ab');              // 'ab'
// compress('aaabbbccc');       // 'a3b3c3'
// compress('aaaaaaaaaa');      // 'a10'

// empty string argument
// console.log(compress(''));              // ''

// // argument not a string
// console.log(compress(true));          // 'Invalid input'

// more than 1 argument
// compress(true, 'abc');          // 'Invalid input'
// compress('aabccc', true);       // 'a2bc3'

// // case-sensitive
// compress('aaabbbccCC');       // 'a3b3c2C2'

// // argument contains non-alphabetic chars
// compress('??/bccc  ');          // '?2/bc3 2'