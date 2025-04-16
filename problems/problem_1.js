/*
# Problem
- Input: string of digits and characters representing a phone number
- Output: string of phone number with non digits removed. String of 10 0s if bad input.

- Questions and Assumptions 
  - Beside special chars, assume other char are always digits
  - Assume bad input return if no arument given
  - Will any char be inside string

- Rules
  - Ignore and filter out any `\s`, `-`, `.`, or `()`
  - If the phone number is less than 10 digits, assume that it is a bad number.
  - If the phone number is 10 digits, assume that it is good.
  - If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
  - If the phone number is 11 digits and the first number is not 1, then it is a bad number.
  - If the phone number is more than 11 digits, assume that it is a bad number.

# Test Cases / Examples
// 10 digits good
'(123).798.1010' => '1237981010'
'123-798-1010' => '1237981010'
'123()-..  --798-  --.  .1010' => '1237981010'
'123 499 3939' => '1234993939'

// 11 digits with 1
'1(234)-567-8938' => '2345678938'
'1234-567-8938' => '2345678938'


// Bad inputs
// Fewer than 10
'123' => '0000000000'
'123456789' => '0000000000'

// 11 digits without 1
'2(235)-527-9938' => '0000000000'

// More than 11 digits
'939-192-1929-122' => '0000000000'
'1(939)-192-1929-112' => '0000000000'

Algorithm:
  Delete any character that is not a digit from the phone number string (regex)
  Check the length of the stripped number
  if it contains 10 digits return number
  if it contains 11 digits and starts with 1 return number
  if it contains 11 digits and does not return nubmer return bad input
  if it contains more than 11 digits return bad input

*/ 

function cleanPhoneNumber(phoneNumber) {
  let strippedNumber = phoneNumber.replace(/[^0-9]/g, '');
  let length = strippedNumber.length;
  let badInputReturn = '0000000000';

  // Valid number
  if (length === 10 ) return strippedNumber;
  if (length === 11 && strippedNumber.startsWith('1')) return strippedNumber.slice(1);
  // bad inputs
  return badInputReturn;
  // if (length < 10) return badInputReturn;
  // if (length === 11 && !strippedNumber.startsWith('1')) return badInputReturn;
  // if (length > 11) return badInputReturn;

}

// 10 digits good
console.log(cleanPhoneNumber('(123).798.1010') ==='1237981010');
console.log(cleanPhoneNumber('123-798-1010') === '1237981010');
console.log(cleanPhoneNumber('123()-..  --798-  --.  .1010') ==='1237981010');
console.log(cleanPhoneNumber('123 499 3939') === '1234993939');

// 11 digits with 1
console.log(cleanPhoneNumber('1(234)-567-8938') === '2345678938');
console.log(cleanPhoneNumber('1234-567-8938') === '2345678938');


// Bad inputs
// Fewer than 10
console.log(cleanPhoneNumber('123') === '0000000000');
console.log(cleanPhoneNumber('123456789') === '0000000000');

// 11 digits without 1
console.log(cleanPhoneNumber('2(235)-527-9938') === '0000000000');

// More than 11 digits
console.log(cleanPhoneNumber('939-192-1929-122') === '0000000000');
console.log(cleanPhoneNumber('1(939)-192-1929-112') === '0000000000');