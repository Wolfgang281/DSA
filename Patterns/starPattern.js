function leftTriangle(n) {
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 0; j <= i; j++) {
      line.push('* ');
    }
    console.log(line.join(' '));
  }
  console.log('==========================');
}
// leftTriangle(3);
// leftTriangle(5);

//! ====================================================================
/*
 ! * * * *
 ! * * *
 ! * *
 ! *
 */
function invertedLeftTriangle(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n - i; j++) {
      arr.push('*');
    }
    console.log(arr.join(' '));
  }
}

// invertedLeftTriangle(4);

// console.log([1, 2, 3, 4].toString());

// ! split() ==> to convert string to array,
//!  join() ==> to convert array to string
// let string = 'hello world and i am learning JS';
// let arr2 = string.split('');
// console.log(arr2);

// let string2 = ['my', 'name', 'is', 'abc'];
// let joined = string2.join(' ');
// console.log(joined);

//! n == number of rows
function numberLeftTriangle(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      arr.push(i + 1);
    }
    console.log(arr.join(' '));
  }
  console.log('=======================');
}

// numberLeftTriangle(4);
// numberLeftTriangle(7);

/* 
1
2 3
4 5 6
7 8 9 10
*/
function numberLeftTriangle2(n) {
  let counter = 1;
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      arr.push(counter);
      counter++;
    }
    console.log(arr.join(' '));
  }
}
// numberLeftTriangle2(4);

//! ====================================================================
/*
1
1 2
1 2 3
1 2 3 4 
 */
function numberLeftTriangle3(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      arr.push(j + 1);
    }
    console.log(arr.join(' '));
  }
}
// numberLeftTriangle3(4);

//! ====================================================================
//TODO:
/* 
1
2 5
3 6 8
4 7 9 10
*/
function numberLeftTriangle4(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      arr.push(i + 1 + j * n);
    }
    console.log(arr.join(' '));
  }
}
// numberLeftTriangle4(4);

//! ====================================================================
/*
_ _ _ *
_ _ * *
_ * * *
* * * *
 */
function printRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) arr.push(' ');
      else arr.push('*');
    }
    console.log(arr.join(' '));
  }
}
// printRightTriangle(4);

//! ====================================================================
function printInvertedRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j <= i - 1) arr.push(' ');
      else arr.push('*');
    }
    console.log(arr.join(' '));
  }
}

// printInvertedRightTriangle(4);

//! ====================================================================
/*
 _ _ *
 _ * * *
 * * * * *
 */
function printPyramid(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];

    //! for spaces
    for (let j = 0; j < n - i - 1; j++) {
      arr.push(' ');
    }

    //! for stars
    for (let k = 0; k < 2 * i + 1; k++) {
      arr.push('*');
    }

    console.log(arr.join(' '));
  }
}

printPyramid(3);

//! ====================================================================
/*
 * * * * *
 _ * * *
 _ _ *
 */
function printInvertedPyramid(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];

    //! for spaces
    for (let j = 0; j < i; j++) {
      arr.push(' ');
    }

    //! for stars
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      arr.push('*');
    }

    console.log(arr.join(' '));
  }
}

printInvertedPyramid(3);

//! ====================================================================
/*
 - - *
 - * * *
 * * * * *
 - * * *
 - - *
 */
function printFullPyramid(n) {
  //? complete first half
  for (let i = 0; i < n; i++) {
    let arr = [];
    //! space
    for (let j = 0; j < n - i - 1; j++) {
      arr.push(' ');
    }
    //! for star
    for (let k = 0; k < 2 * i + 1; k++) {
      arr.push('*');
    }
    console.log(arr.join(' '));
  }
  //? complete second half
  for (let i = n - 2; i >= 0; i--) {
    let arr = [];

    //! space
    for (let j = 0; j < n - i - 1; j++) {
      arr.push(' ');
    }
    //! for star
    for (let k = 0; k < 2 * i + 1; k++) {
      arr.push('*');
    }
    console.log(arr.join(' '));
  }
}

// printFullPyramid(3);

// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.join(' '));
