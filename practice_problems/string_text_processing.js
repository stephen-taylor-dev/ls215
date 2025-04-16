"use strict";
// function isUppercase(string) {
//   // return [...string].every(char => {
//   //   if (char.match(/[A-Z]/g)) {
//   //     return true;
//   //   } else if (char.match(/[^a-z]/g)) {
//   //     return true;
//   //   }
//   //   return false;
//   // });
//   return !/[a-z]/.test(string);
// }

// console.log(isUppercase('t') === false);   // false
// console.log(isUppercase('T') === true);   // true
// console.log(isUppercase('Four Score') === false);   // false
// console.log(isUppercase('FOUR SCORE') === true);   // true
// console.log(isUppercase('4SCORE!') === true);   // true
// console.log(isUppercase('') === true);   // true


// function removeVowels(arrayStrings) {
//   return arrayStrings.map(string => {
//     return string.replace(/[aeiou]/gi, '');
//   });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));   // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));   // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));   // ["BC", "", "XYZ"]

// function letterCaseCount(string) {
//   return {
//     lowercase: findCountOfPattern(/[a-z]/g, string),
//     uppercase: findCountOfPattern(/[A-Z]/g, string),
//     neigher: findCountOfPattern(/[^a-z]/gi, string),
//   };
// }

// function findCountOfPattern(regex, string) {
//   let matches = string.match(regex);
//   return matches ? matches.length : 0;
// }


// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }afseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

// function wordCap(words) {
//   return words.split(' ')
//               .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//               .join(' ');
// }

// console.log(wordCap('four score and seven') === "Four Score And Seven");   // "Four Score And Seven"
// console.log(wordCap('the javaScript language') === "The Javascript Language");   // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word');   // 'This Is A "quoted" Word'

// function swapCase(string) {
//   return [...string].map(char => {
//     if (/[A-Z]/g.test(char)) {
//       return char.toLowerCase();
//     } else if (/[a-z]/g.test(char)) {
//       return char.toUpperCase();
//     } else {
//       return char;
//     }
//   }).join('');
// }
// console.log(swapCase('CamelCase') === "cAMELcASE");   // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");   // "tONIGHT ON xyz-tv"

// function staggeredCase(phrase) {
//   return [...phrase].map((char, index) => {
//     if (/[^a-z]/gi.test(char)) {
//       return char;
//     } else if (index % 2 === 0) {
//       return char.toUpperCase();
//     } else if (index % 2 === 1) {
//       return char.toLowerCase();
//     }
//   }).join(''); 
// }

// console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");   // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");   // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function wordLengths(words) {
//   if (words) {
//     return words.split(' ').map(word => {
//       return word + ' ' + String(word.length);
//     });
//   } else {
//     return [];
//   }
// }

// function wordLengths(words) {
//   if (arguments.length === 0 || words.length === 0) {
//     return [];
//   }

//   return words.split(' ').map(word => `${word} ${String(word.length)}`);
// }


// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(searchPhrase, text) {
//   let regex = new RegExp(`${searchPhrase}`, 'gi');
//   let matches = text.match(regex) || [];
//   return matches.length;
// }

// console.log(searchWord('sed', text));      // 3

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(searchPhrase, text) {
//   if (arguments[0] === undefined && arguments[1] === undefined ) {
//     return null;
//   }

//   let regex = new RegExp(`\\b${searchPhrase}\\b`, 'gi');
//   let matches = text.match(regex) || [];
//   return matches.length;
// }

// console.log(searchWord('qui', text));      // 3

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(word, text) {
//   if (word === undefined && text === undefined ) {
//     return null;
//   }
//   let regex = new RegExp(`${word}`, 'gi');
//   let matches = [...text.matchAll(regex)].map(match => match['index']);

//   let formattedWord = `**${word.toUpperCase()}**`

//   matches.forEach(index => {
//     let before = text.slice(0, index);
//     let after = text.slice(index + word.length);

//     text = before + formattedWord + after;

//   });

//   return text;
// }

// console.log(searchWord('sed', text) === '**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?');
// // returns

function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
}