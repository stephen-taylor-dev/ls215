/*
Problem:
- input: object - lists oppenent and ther posisiotns, integer - a position we are check for
- output: integer

- Rules
  - if two are equidistant 
    (same difference from position but possibly different values)
    - return higher value position 
  - if empty positions object given, return `null`
  - calculating absolute vlaue of distance from given position
  - treat null position values like zero
  - object keys can potentially be different
  - oppenents with the value null are considered inactive

Exaples / Test Cases
"Opponent 1" : 1,
"Opponent 2" : 15,
"Opponent 3" : 37
10

37 - 10 17
15 - 10 5
1 - 10 9
15

"Opponent 1a" : 1,
"Opponent 1b" : 5
3
5 - 3 2
5 - 1 4
5

"Opponent 1a" : 1, 
"Opponent 1b" : 5,
"Opponent 1c" : 50, 
"Opponent 1d" : 100, 
"Opponent 1e" : null
150
150 - 1 149
150 - 5 145
150 - 50 100
150 - 100 50 
150 - null 150
100

149 145 100 50 150

10
20
15
5 5 

Data structure
Array of oppenent position values
Transform array to abs value of differenes

return a number


Algorithm
"Opponent 1" : 1,
"Opponent 2" : 15,
"Opponent 3" : 37
10 => 15

[1, 15, 17]
37 - 10 17
15 - 10 5
1 - 10 9
[17, 5, 9]
lowestDiffVal = Infinity
lowestDiffIndex 

15

if positions object is empty return null

Get values from the `positions` objects
  (use Object.values(positions))

 filter an null values out
Transform array with map. save result to new array
    get the abs value of the difference between position
    current position

initialze lowest Difference to Infinity
loop over the differences array with index
  check if the current difference is less than or equal lowest difference
    update lowestValIndex with current index
    update lowestDifference with current value 

return element at lowestDifference index from the posisiotn array


Questions
- can two oppenents have the same position
- will positions always be an object or will wit sometimes be an array?
- will object every be empty? if so how to handle
- will the position values always integers? will they ever be floats or strings
- will the positions always be positive
- what shoudl wew return if missing args
  - like no poisition or not position
- will board positions ever be zero

- will position arg also always be
  - positive, integer, not a string
- will position arg always be given? if now how should we handle that


*/



function findClosestOpponent(positions, position) {
  if (Object.keys(positions).length === 0 && positions.constructor === Object) return null;

  let positionVals = Object.values(positions);

  let differences = positionVals.map(oppenentPosition => {
    if (oppenentPosition) {
      return Math.abs(position - oppenentPosition)
    } else {
      return Infinity;
    }
  });

  let lowestDiffIndex;
  let lowestDiffVal = Infinity;
  differences.forEach((diff, idx) => {
    if (diff <= lowestDiffVal) {
      lowestDiffIndex = idx;
      lowestDiffVal = diff;
    }
  });

  return positionVals[lowestDiffIndex];
}


// Happy paths
console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10) === 15); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3) === 5); // 5

// equidistant
console.log(findClosestOpponent({
  "Opponent 1a" : 10,
  "Opponent 1b" : 20
}, 15) === 20); // 20

// inactive oppenents
console.log(findClosestOpponent({
  "Opponent 1a" : null, "Opponent 1b" : 5, "Opponent 1c" : null,
  "Opponent 1d" : null, "Opponent 1e" : 200, "Opponent 1f" : 400
}, 300) === 400); // 400

// Edge case
console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150) === 100); // 100

console.log(findClosestOpponent({}, 74) === null); // null

console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10) === 15); // 15
