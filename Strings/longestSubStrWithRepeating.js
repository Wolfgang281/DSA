function longestSubStrUnique(str) {
  let map = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let str = "abcabcdefabb";
console.log(longestSubStrUnique(str));
