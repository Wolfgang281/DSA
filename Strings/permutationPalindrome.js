function isPermutationPalindrome(s) {
  let freq = new Array(128).fill(0); // ASCII size for case sensitivity

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    let ch = s.charCodeAt(i);
    freq[ch]++;
  }

  // Count how many characters have odd frequency
  let oddCount = 0;
  for (let count of freq) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // For palindrome permutation:
  // - If string length is even: all characters must have even frequency
  // - If string length is odd: exactly one character can have odd frequency
  return oddCount <= 1 ? 1 : 0;
}
