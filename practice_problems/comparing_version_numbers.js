/* 
# Problem
- Input: two version numbers in string representation, version1 and version2
- Output: one of the numbers from 1, 0, and -1; or null for invalid inputs

- Rules
  - if any inputs contain invalid characters, return null
    - any characters other than digits and . are considered invalid
    - a version number that begins or ends with a period or has more than one period in a row, is invalid.
  - Compare the two input versions
    - if version1 > version2, return 1
      - leftmost version number    
    - if version1 < version2, return -1
    - if version1 === version2, return 0
  - Rules to compare two version numbers
    - start from the left most parts of the two version numbers
    - if the number part of the first version number is larger, then the first version number is larger
    - if the number part of the second version number is larger, then the first version number is smaller
    - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
      - do the same comparison and decide which version number is larger
      - keep moving to the right until the result of the comparison is determined
      - if we get to the last number part of the two version numbers and they're equal,
        then the two version numbers are equal
*/