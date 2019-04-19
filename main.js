let words = [' a good UI', ' great designs', ' minimalistic design', ' popcorn'];
let word = '';
let letter = '';
let index = 0;
let count = 0;

// lets create the function as an IIFE
(function type() {

  if (count === words.length) {
    count = 0;
  }

  word = words[count];
  letter = word.slice(0, ++index);

  document.querySelector('.type').textContent = letter;

  if (letter.length === word.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 300);

})();