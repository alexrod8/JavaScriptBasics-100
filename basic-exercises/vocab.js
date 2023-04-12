
// this code loops through each element in a nested array


let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i++) {
let same = vocabulary[i];
for (let j = 0; j < same.length; j++) {
  console.log(same[j]);
}
}