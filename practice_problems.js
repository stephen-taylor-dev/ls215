// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// function totalArea(rectangles) {
//   let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
//   return areas.reduce((acc, val) => acc + val);
// }

// // console.log(totalArea(rectangles) === 141);   // 141

// function totalSquareArea(rectangles) {
//   let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
//   return totalArea(squares);
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalSquareArea(rectangles));    // 121


let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];


function processReleaseData(data) {
  // ...
}

console.log(processReleaseData(newReleases));

// should return: [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];