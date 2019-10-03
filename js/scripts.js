var consonants = ["b", "C", "D", "F", "G",
"H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"]
var vowels = ["A", "E", "I", "O", "U"]



$(document).ready(function() {
  $('#inputs form').submit(function(event) {
      event.preventDefault();
  var sentence = ($('input#intake').val());
  var words = sentence.split(' ');
  console.log(words);
  words.forEach(function(word) {
    var letters = words.slice();
console.log(letters)
  });
});
});
