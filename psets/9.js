/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  var bad = sentence.indexOf("bad");
  var not = sentence.indexOf("not");

  if (not == -1) {
    console.log(sentence)
  }
  else if (bad < not) {
    console.log(sentence)
  }
  else {
    var part1 = sentence.slice(0, not);
    var part2 = sentence.slice(bad + 3);
    console.log(part1 + "good" + part2)
  }
}
notBad("This movie is so bad!!")
