/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var first = s[0];
  var newString = s.replace(new RegExp(first, "gm"), "*");
  console.log(newString)
}
fixStart("hello there, nice to say hi")
