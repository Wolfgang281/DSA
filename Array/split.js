//! given an string with multiple or single spaces between words, split the string into an array of words, without using any built-in methods.
//? (push() can be used)

//? example --> "hello   world and i       am learning JS    "
//? ==> ['hello', 'world', 'and', 'i', 'am', 'learning', 'JS']

function splitString(str, limiter) {
  let arr = [];
  let currentWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== limiter) {
      // if (str[i] !== " ") {
      currentWord += str[i];
      // }
    } else {
      if (currentWord.length > 0) {
        arr.push(currentWord);
        currentWord = "";
      }
    }
  }
  if (currentWord.length > 0) {
    arr.push(currentWord);
  }
  console.log(arr);
}

splitString("hello -  world and i---am learning JS", "-");
