let string1 = "({[})";
let string2 = "({}[])";
let string3 = "({[])}";
let string4 = "[[[]]}";
let string5 = "[[})]";

function isValid(str) {
  let arr = [];
  for (let char of str) {
    if (char == "(" || char == "{" || char == "[") {
      arr.push(char);
    } else {
      if (arr.length === 0) return false;
      let lastChar = arr.pop();
      if (
        (char == ")" && lastChar != "(") ||
        (char == "]" && lastChar != "[") ||
        (char == "}" && lastChar != "{")
      )
        return false;
    }
  }
  return true;
}

console.log(isValid(string1));
console.log(isValid(string2));
console.log(isValid(string3));
console.log(isValid(string4));
console.log(isValid(string5));
