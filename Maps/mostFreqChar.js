function mostFreqChar(str) {
  str = str.toLowerCase();
  let map = new Map();

  for (let char of str) {
    /* if (map.has(char)) {
      let oldValue = map.get(char);
      let newValue = oldValue + 1;
      map.set(char, newValue);
    } else {
      map.set(char, 1);
    } */
    if (char !== " ") {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  let maxFreq = -1;
  let resultChar = "";
  for (let [key, value] of map) {
    if (value > maxFreq || (maxFreq === value && key < resultChar)) {
      maxFreq = value;
      resultChar = key;
    }
  }
  return [resultChar, maxFreq];
}

mostFreqChar("hello");
console.log(mostFreqChar("Hello My Name is muskan yy"));
