// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// function totalArea(rectangles) {
//   let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
//   return areas.reduce((acc, val) => acc + val);
// }

// // console.log(totalArea(rectangles) === 141);   // 141

// function totalSquareArea(rectangles) {
//   let squares = rectangles.filter(rectangle =>
//  rectangle[0] === rectangle[1]);
//   return totalArea(squares);
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalSquareArea(rectangles));    // 121


// let newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];

/*
filter objects in array to only objects with title and id
create a new array with objects that only include id and title
filter then map

*/

// function processReleaseData(data) {
//   let validMovies = data.filter(movie => movie.id && movie.title);
//   return validMovies.map(movie => {
//     return {id: movie.id, title: movie.title };
//   });
// }

// console.log(processReleaseData(newReleases));

// // should return: [{ id: 70111470, title: 'Die Hard'},
//  { id: 675465, title: 'Fracture' }];


// function octalToDecimal(numberString) {
//   let digits = numberString.split('').reverse();

//   let decimalParts = digits.map((digit, index) => {
//     return (digit * (8 ** index));
//   });

//   return decimalParts.reduce((sum, digit) => sum + digit);
// }

// console.log(octalToDecimal('1') === 1);   // 1
// console.log(octalToDecimal('10') === 8);   // 8
// console.log(octalToDecimal('130') === 88);   // 88
// console.log(octalToDecimal('17') === 15);   // 15
// console.log(octalToDecimal('2047') === 1063);   // 1063
// console.log(octalToDecimal('011') === 9);   // 9

// function anagram(word, list) {
//   return list.filter(candidate => areAnagrams(candidate, word));
// }

// function areAnagrams(source, target) {
//   let sourceLetters = source.split('').sort();
//   let targetLetters = target.split('').sort();
//   return compareArrays(sourceLetters, targetLetters);
// }

// function compareArrays(array1, array2) {
//   if (array1.length !== array2.length) return false;
//   return array1.every((letter, index) => letter === array2[index]);
// }


// console.log(anagram('listen', ['enlists', 'google', 'inletsss', 'banana']));
//   // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));
//    // [ "enlist", "inlets" ]


// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// function processBands(data) {
//   return data.map(band => {
//     updateCountry(band);
//     capitalizeBandName(band);
//     removeDotsInBandName(band);
//     return band;
//   });
// }

// function updateCountry(band) {
//   band.country = 'Canada';
// }

// function capitalizeBandName(band) {
//   band.name = band.name.split(' ').map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// function removeDotsInBandName(band) {
//   band.name = band.name.replace('.', '');
// }

// console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = .65;
const EXERCISES_WEIGHT = .35;

function generateClassRecordSummary(scores) {
  let studentScores = Object.keys(scores)
    .map(student => scores[student].scores );

  let examScores = studentScores.map(score => score.exams);

  return {
    studentGrades: getStudentGrades(studentScores),
    exams: getExamData(examScores)
  };
}


function getStudentGrades(scores) {
  return scores.map(score => calcStudentScore(score));
}

function calcStudentScore(score) {
  // average exam score
  let sumExamsScores = score.exams.reduce((total, grade) => total + grade);
  let averageExam = sumExamsScores / score.exams.length;
  let exerciseGrades = score.exercises.reduce((total, grade) => total + grade);

  let percentGrade = Math.round((averageExam * EXAM_WEIGHT)
    + (exerciseGrades * EXERCISES_WEIGHT));

  return `${percentGrade} (${letterGrade(percentGrade)})`;
}

function letterGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getExamData(studentExams) {
  let examScores = [];
  let numExams = studentExams[0].length;

  for (let idx = 0; idx < numExams; idx += 1) {
    let exam = [];
    studentExams.forEach((studentGrades) => {
      exam.push(studentGrades[idx]);
    });
    examScores.push(exam);
  }
  return examScores.map(exam => processExam(exam));
}

function processExam(exam) {
  return {
    average: calcAverageExam(exam),
    minimum: Math.min(...exam),
    maximum: Math.max(...exam),
  };
}

function calcAverageExam(exams) {
  let sumScores = exams.reduce((total, score) => total + score);
  return Number((sumScores / exams.length).toFixed(1));
}


console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
