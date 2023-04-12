console.log('confetti floating everywhere'.toUpperCase());


let string = 'launch school tech & talk'

let words = string.split(' ');

let capitalizedWords = [];
 for(let i = 0; i < words.length; i++){
   let word = words[i];
   console.log(word[0].toUpperCase() + word.slice(1));
 }