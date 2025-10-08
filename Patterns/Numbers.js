//! ArmStrong number
//! Magic number
//! palindrome
//! perfect number
//! Harshad number
//! Automorphic number
//! Strong number
//! Neon number == 9 --> 81 --> 9
//! duck number == 103456
//! spy number ==> 123 sum of digits = 6 === multiplication of digits = 6
//! evil number
//! sunny number
//! Kaprekar number
//! fascinating number
//! disarium number

//~ ====================== palindrome number =====================
// 121 should be same when we read from first and last
function checkPalindrome(str) {
  let number = 121;
  let i = str[0];
  let j = str[str.length - 1];
  while (i < j) {
    if (str[i] !== str[j]) {
      return "not a palindrome";
    }
    i++;
    j--;
  }
  return "palindrome number";
}

// console.log(checkPalindrome('121'));
// console.log(checkPalindrome('121121'));
// console.log(checkPalindrome('1234'));

//~ ====================== reversing a number =====================
function reverseNumber(number) {
  let temp = number;
  let reverseNumber = 0;
  while (number > 0) {
    let remainder = Math.floor(number % 10);
    reverseNumber = reverseNumber * 10 + remainder;
    number = Math.floor(number / 10);
  }
  console.log(reverseNumber);
  //   console.log(temp);
  //   if (temp === reverseNumber) {
  //     console.log('palindrome');
  //   } else {
  //     console.log('not');
  //   }
}

// reverseNumber(143);
// reverseNumber(1223344);
// reverseNumber(10000000);

//~ ====================== count digits =====================
function countDigits(number) {
  let count = 0;
  while (number > 0) {
    count++;
    number = Math.floor(number / 10);
  }
  console.log(count);
}
function countDigitsShortCut(number) {
  return Math.ceil(Math.log10(number));
}

// countDigits(123);
// countDigits(123123);
// countDigits(1);
// countDigits(1000000);
// console.log(countDigitsShortCut(123));
// console.log(countDigitsShortCut(123123));

//~ ====================== prime numbers (divisible by number and 1) =====================
//? 2 --> it is smallest even prime number
//? 3, 5, 7, 11, 13, ......
function isPrime(n) {
  if (n % 2 === 0) return false;
  if (n === 2) return true;
  if (n === 1 || n == 0) return false;
  let count = 0;
  for (let i = 3; i <= n; i++) {
    if (n % i === 0) count++;
  }
  if (count === 1) return true;
  else return false;
}
// console.log(isPrime(2));
//! print the all prime numbers till n (50)
function printPrimes(n) {
  let result = [];
  // n =100
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) result.push(i);
  }
  console.log(result);
}
printPrimes(100);


//? github.com/utk-281/programming_0900