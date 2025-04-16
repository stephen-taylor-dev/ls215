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

// function isValidEmail(email) {
//   if (email.match(/^[A-Za-z0-9]+[@]([A-Za-z]+[.])+[A-Za-z]+$/i)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidEmail('Foo@baz.com.ph') === true);   // true
// console.log(isValidEmail('Foo@mx.baz.com.ph') === true);   // true
// console.log(isValidEmail('foo@baz.com') === true);   // true
// console.log(isValidEmail('foo@baz.ph') === true);   // true
// console.log(isValidEmail('HELLO123@baz') === false);   // false
// console.log(isValidEmail('foo.bar@baz.to') === false);   // false
// console.log(isValidEmail('foo@baz.') === false);   // false
// console.log(isValidEmail('foo_bat@baz') === false);   // false
// console.log(isValidEmail('foo@bar.a12') === false);   // false
// console.log(isValidEmail('foo_bar@baz.com') === false);   // false
// console.log(isValidEmail('foo@bar.....com') === false);   // false

// function isBalanced(string) {
//   let parentheses = string.match(/[()]/g);
//   let numParentheses = parentheses ? parentheses.length : 0;

//   let count = 0;
//   for (let index = 0; index < numParentheses; index += 1) {
//     if (parentheses[index] === '(') {
//       count += 1;
//     } else {
//       count -= 1;
//     }
//     if (count < 0) return false;
//   }

//   return count === 0;
// }


// console.log(isBalanced('What (is) this?') === true);   // true
// console.log(isBalanced('What is) this?') === false);   // false
// console.log(isBalanced('What (is this?') === false);   // false
// console.log(isBalanced('((What) (is this))?') === true);   // true
// console.log(isBalanced('((What)) (is this))?') === false);   // false
// console.log(isBalanced('Hey!') === true);   // true
// console.log(isBalanced(')Hey!(') === false);   // false
// console.log(isBalanced('What ((is))) up(') === false);   // false

// let textExcerpt = 'To be or not to be-that is the question:\n' +
//   'Whether \'tis nobler in the mind to suffer\n' +
//   'The slings and arrows of outrageous fortune,\n' +
//   'Or to take arms against a sea of troubles,\n' +
//   'And, by opposing, end them. To die, to sleep-\n' +
//   'No more-and by a sleep to say we end\n' +
//   'The heartache and the thousand natural shocks\n' +
//   'That flesh is heir to-\'tis a consummation\n' +
//   'Devoutly to be wished. To die, to sleep-\n' +
//   'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
//   'For in that sleep of death what dreams may come,\n' +
//   'When we have shuffled off this mortal coil,\n' +
//   'Must give us pause. There\'s the respect\n' +
//   'That makes calamity of so long life.\n' +
//   'For who would bear the whips and scorns of time,\n' +
//   'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
//   'The pangs of despised love, the law’s delay, [F: disprized]\n' +
//   'The insolence of office, and the spurns\n' +
//   'That patient merit of the unworthy takes,\n' +
//   'When he himself might his quietus make\n' +
//   'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
//   'To grunt and sweat under a weary life,\n' +
//   'But that the dread of something after death,\n' +
//   'The undiscovered country from whose bourn\n' +
//   'No traveler returns, puzzles the will\n' +
//   'And makes us rather bear those ills we have\n' +
//   'Than fly to others that we know not of?\n' +
//   'Thus conscience does make cowards of us all,\n' +
//   'And thus the native hue of resolution\n' +
//   'Is sicklied o\'er with the pale cast of thought,\n' +
//   'And enterprises of great pitch and moment, [F: pith]\n' +
//   'With this regard their currents turn awry, [F: away]\n' +
//   'And lose the name of action.-Soft you now,\n' +
//   'The fair Ophelia.-Nymph, in thy orisons\n' +
//   'Be all my sins remembered';


// let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
// let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// function sentiment(text) {
//   let words = text.toLowerCase().match(/[a-z']+/g);

//   let posSentiments = [];
//   let negSentiments = [];

//   words.forEach(word => {
//     if (positiveWords.includes(word)) {
//       posSentiments.push(word);
//     } else if (negativeWords.includes(word)) {
//       negSentiments.push(word);
//     }
//   });

//   let positiveCount = posSentiments.length;
//   let negativeCount = negSentiments.length;

//   console.log(`There are ${positiveCount} positive words in the text.`);
//   console.log(`Positive Sentiments: ${posSentiments.join(', ')}`);

//   console.log(`There are ${negativeCount} negative words in the text.`);
//   console.log(`Negative Sentiments: ${negSentiments.join(', ')}`);

//   let sentiment = determineSentiment(positiveCount, negativeCount);
//   console.log(`The sentiment of the text is ${sentiment}.`);
// }

// function determineSentiment(posCount, negCount) {
//   if (posCount > negCount) {
//     return 'Positive';
//   } else if (posCount < negCount) {
//     return 'Negative';
//   } else {
//     return 'Neutral';
//   }
// }

// sentiment(textExcerpt);

// // console output

// // There are 5 positive words in the text.
// // Positive sentiments: fortune, dream, respect, love, resolution

// // There are 6 negative words in the text.
// // Negative sentiments: die, heartache, die, death, weary, death

// // The sentiment of the text is Negative.

// let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
// let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

// function sentiment(text) {
//   let posWords = text.match(positiveRegex).map(toLowerCaseWord);
//   let negWords = text.match(negativeRegex).map(toLowerCaseWord);


//   let positiveCount = posWords.length;
//   let negativeCount = negWords.length;

//   console.log(`There are ${positiveCount} positive words in the text.`);
//   console.log(`Positive Sentiments: ${posWords.join(', ')}`);

//   console.log(`There are ${negativeCount} negative words in the text.`);
//   console.log(`Negative Sentiments: ${negWords.join(', ')}`);

//   let sentiment = determineSentiment(positiveCount, negativeCount);
//   console.log(`The sentiment of the text is ${sentiment}.`);
// }

// function toLowerCaseWord(word) {
//   return word.toLowerCase();
// }

// function determineSentiment(posCount, negCount) {
//   if (posCount > negCount) {
//     return 'Positive';
//   } else if (posCount < negCount) {
//     return 'Negative';
//   } else {
//     return 'Neutral';
//   }
// }

// sentiment(textExcerpt);

// console output

// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution

// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death

// The sentiment of the text is Negative.


// function mailCount(emailData) {
//   let emails = emailData.split('##||##');

//   let dates = emails.reduce((datesArr, email) => {
//     let dateSection = email.match(/Date:\s.+#\/#/gi);
//     let date = dateSection[0].match(/[\d-]+/gi);
//     datesArr.push(new Date(date));
//     return datesArr;
//   }, []);

//   let oldest = dates.reduce((earliest, date) => {
//     if (date < earliest) {
//       return date;
//     }
//     return earliest;
//   });

//   let newest = dates.reduce((latest, date) => {
//     if (date > latest) {
//       return date;
//     }
//     return latest;
//   });

//   console.log(`Count of Email: ${emails.length}`);
//   console.log(`Date Range: ${oldest.toDateString()} - ${newest.toDateString()}`);

// }


// function mailCount(emailData) {
//   let emails = emailData.split('##||##');
//   let count = emails.length;
//   console.log(emails.map(email => email.split('#/#')[2]));
//   let emailDates = emails.map(email => email.split('#/#')[2]);

//   console.log('Count of Email: ' + count);
//   console.log('Date Range: ' + displayableDateRange(emailDates));
// }

// function displayableDateRange(dates) {
//   let dateObjects = getDateObjects(dates);
//   dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
//   return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
// }

// function getDateObjects(dates) {
//   return dates.map(date => {
//     let dateElements = date.split(' ')[1].split('-');
//     let month = parseInt(dateElements[0], 10) - 1;
//     let day = parseInt(dateElements[1], 10);
//     let year = parseInt(dateElements[2], 10);
//     return new Date(year, month, day);
//   });
// }

// mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016



