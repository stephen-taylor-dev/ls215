// let firstName = 'Stephen';
// let lastName = 'Taylor';

// let fullname = firstName + ' ' + lastName;

// // console.log(fullname);
// // console.log(firstName.concat(lastName));

// let names = fullname.split(' ');

// let language = 'JavaScript';
// let idx = language.indexOf('S');

// let charCode = language.charCodeAt(idx);


// // console.log(String.fromCharCode(charCode));

// // console.log(language.lastIndexOf('a'));


// let a = 'a';
// let b = 'b';
// // console.log(a > b);
// b = 'B';
// // console.log(a > b);


// // console.log(language.slice(1,4));
// // console.log(language.slice(2,4));

// // console.log(language.substring(1,4));
// // console.log(language.substring(2,4));


// // console.log(language.slice(1, -1));
// // console.log(language.slice(2, -1));

// // console.log(language.substring(1, -1));
// // console.log(language.substring(2, -1));

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';

// let compoundSentence = fact1 + ' and ' + fact2.toLocaleLowerCase();
// // console.log(compoundSentence);

// // console.log(fact1[0], fact2[0]);

// let pi = 22 / 7;
// pi = String(pi);
// // console.log(pi.lastIndexOf('14'));

// let boxNumber = (356).toString();
// // console.log(boxNumber);

// boxNumber = parseInt(boxNumber, 10);
// // console.log(typeof boxNumber);
// boxNumber = String(boxNumber);
// // console.log(typeof boxNumber);

// let rlSync = require('readline-sync');
// let name = rlSync.question("What's your name?\n");
// if (name.endsWith('!')) {
//   console.log(`HELLO ${name.slice(0, -1).toUpperCase()}.
//  WHY ARE YOU SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

// reverse a string

// function reverse(string) {
//   return [...string].reverse().join('');
// }

// console.log(reverse('hello'));                  // returns "olleh"
// console.log(reverse('The quick brown fox'));
// // returns "xof nworb kciuq ehT"


// function acronym(string) {
//   return string.split(/[-\s]/gi).map(word => word[0].toUpperCase()).join('');
// }


// console.log(acronym('Portable Network Graphics') === "PNG");   // "PNG"
// console.log(acronym('First In, First Out') === "FIFO");   // "FIFO"
// console.log(acronym('PHP: HyperText Preprocessor') === "PHP");   // "PHP"
// console.log(acronym('Complementary metal-oxide semiconductor') === "CMOS");   // "CMOS"
// console.log(acronym('Hyper-text Markup Language') === "HTML");   // "HTML"

