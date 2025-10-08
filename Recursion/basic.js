//~ recursion --> a function calling itself, we need a base case (stop condition) and a recursive case

//! print hello world n number of times
function printHello(n) {
  if (n === 0) return;
  console.log("hello");
  console.log(n);
  printHello(n - 1);
}
printHello(5);

//! print the first n natural numbers
//! find the sum of n natural numbers
//! find the factorial of a number
//? first try using for loop

//! print numbers 1 to 10 using recursion.
function printNumbers(n) {
  if (n === 1) {
    console.log(n);
    return;
  }
  printNumbers(n - 1);
  console.log(n);
  return;
  //~ return; if you don't write the return statement, javascript will add it implicitly.
}

// printNumbers(100);

//! find the sum of n natural numbers
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

// sumOfNumbers(10)

function sumOfNumbersRecursive(n) {
  if (n === 1) return 1;
  let sum = 0;
  sum = n + sumOfNumbersRecursive(n - 1);
  return sum;
}

// console.log(sumOfNumbersRecursive(5));
// console.log(sumOfNumbersRecursive(10));

//! find the factorial of a number
//? n = 4, 4*3*2*1 ==> 24
function fact(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
// console.log(fact(4))

function factorialRecursion(n) {
  let product = 1;
  if (n === 1) return 1;
  product = n * factorialRecursion(n - 1);
  return product;
}
// console.log(factorialRecursion(4))
