/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize (noun, number) {
  var len = noun.length;
  var lastChar = noun.charAt(len - 1);

  if (number == 1) {
    noun = noun;
  }
  else if (number != 1 && lastChar == "s") {
    noun = noun;
  }
  else {
    noun = noun + "s";
  }
  console.log(number + " " + noun)
}

pluralize("cats", 5);
pluralize("dog", 1);
pluralize ("cow", 77);
