 /*const large = new Array(100).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(large);
*/

// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(i, j);
    }
  }
}

logAllPairsOfArray(boxes);