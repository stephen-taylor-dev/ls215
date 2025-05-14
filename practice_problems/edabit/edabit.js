/*
Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

Examples
pyramidArrays(1) ➞ [[1]]
pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]
pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]


Problem:
- Input: number
- Output: array of arrays

Rules
n will be a positive integer.

Will we ever not be given argument? what to do if not
will we ever be given NaN or Infiity of - Infiity
Will we ever be given f

Test Examples



Data structure
number
array of arrays numbers


Algorithm: 
initialze an outpu array
  loop input of n times (for loop starting at n down to 1 inclusive)
    create sub array of iteration of loop elements
    add array to output array
    decrement counter by 1 
  return the outptu array

create array of n empty array elements
transform each sub array in array using map to fill with current iteration plus elements
return transformed array

*/

// function pyramidArrays(n) {
//   let output = [];
//   for (let i = 1; i <= n; i += 1) {
//     output.push(Array(i).fill(i));
//   }

//   return output;
// }

// function pyramidArrays(n) {
//   // return Array.from(Array(n)).map((subArr, idx) => {
//   //   return Array(idx + 1).fill(idx + 1);
//   // });
//   return Array.from({ length: n }, (_, i) => Array(i + 1).fill(i + 1))
// }


// console.log(pyramidArrays(1)) // [[1]]
// console.log(pyramidArrays(3)) // [[1], [2, 2], [3, 3, 3]]
// console.log(pyramidArrays(5)) // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]


/*
Combine Arrays
Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".


Problem
Input: 3 arrays
output is array of 3 arrays 

Notes
- transposing the 3 arrays
- nth element of all sub arrays goes in new array
- arays can contain undefined

Questions
- should original arrays not be mutated?
- will always be gvien 3 arrays, if not how to handl that
- will ever be given no arguments
- will inputs always be arrays?
- will arrays ever be sparse arrays? how to handle missing elements?
- will arrays every be empty how to handle that?
- will it array or sub arays ever contain more than 3 elements



Examples
combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

Data structure
- combine input arrays into 1 array of arrays


Algorithm:
initialze an combined array to array of 3 empty arrays;
find length of longest array
iterate length times
  if index in array 
    get ith element of all 3 arrays
    add this element to ith elment of the combined arays
  else 
    add "*" to the ith element of teh combined arrays

return the combined array
  
[[], [], []]
[false, "false"]
["true", true, "bool"]
["null", "undefined"]

[[], [], []]
*/







// function combineArrays(arr1, arr2, arr3) {
//   const combined = [];

//   for (let i = 0; i < 3; i += 1) {
//     combined.push([get(arr1, i), get(arr2, i), get(arr3, i)])
//   }

//   return combined;
// }

// function get(arr, index) {
//   return index in arr ? arr[index] : '*';
// }


// console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]));
// // // [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// console.log(combineArrays([false, "false"], ["true", true, "bool"], [null,undefined]));

// // // [[false, "true", null], ["false", true, undefined], ["*", "bool", "*"]]

// console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));
// // // [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick",  "Raymond", "Riri"]));
// // // [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]



/*
Likes vs. Dislikes
YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

Pressing a button, which is already active, will undo your press.
If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
Create a function that takes an array of button inputs and returns the final state.

Problem
Input: array of strings
Output: string

Rules
Notes
If no button is currently active, return "Nothing".
If the array is empty, return "Nothing".

Examples
likeOrDislike(["Dislike"]) ➞ "Dislike"
likeOrDislike(["Like", "Like"]) ➞ "Nothing"
likeOrDislike(["Dislike", "Like"]) ➞ "Like"
likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"


questions
  - will we always be given an array
  - will we always be given an argument
  - will array be sparese array
  - will array contain object properties? how to handle if so?
   - will strings aalwasy be like and didslike?
   - are they case sensitive?


Data structure:
like boolean
dislike boolean
nothing boolean

last seen string


Algorithm
1. if arg is empyt array return "Nothing" 
2. initialze last word to empty string
3. iterate over array or strings
  - if current word equals last word 
    - set last word to nothing
  - else 
    - set lastWord to current word
return lastWord

1. use reduce with initial value of "Nothing"
  - use the conditional check to update the return of the reduce statement

*/

// function likeOrDislike(clicks) {
//   return clicks.reduce((state, click) => {
//     return click === state ? "Nothing" : click; 
//   }, "Nothing");
// }


// console.log(likeOrDislike(["Dislike"])); // "Dislike"
// console.log(likeOrDislike(["Like", "Like"])); //  "Nothing"
// console.log(likeOrDislike(["Dislike", "Dislike"])); //  "Nothing"
// console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
// console.log(likeOrDislike(["Like", "Dislike"])); // "Dislike"
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
// console.log(likeOrDislike(["Dislike", "Dislike", "Like"])); // "Like"
// console.log(likeOrDislike(["Dislike", "Like", "Like"])); // "Nothing"
// console.log(likeOrDislike([])); // "Nothing"


