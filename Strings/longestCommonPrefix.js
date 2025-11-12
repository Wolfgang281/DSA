function longestCommonPrefix(str) {
  let numberOfStrings = str.length;
  let prefix = str[0];
  for (let i = 1; i < numberOfStrings; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
