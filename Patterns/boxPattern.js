function printStarBox() {
  //! outer for-loop for rows
  for (let i = 0; i < 6; i++) {
    let row = '';
    //! inner for-loop for cols
    for (let j = 0; j < 6; j++) {
      row += '* ';
    }
    console.log(row);
  }
}

// printStarBox();

function printNumberBox() {
  let counter = 1;
  for (let i = 1; i <= 3; i++) {
    let row = '';
    for (let j = 1; j <= 3; j++) {
      row = row + counter + ' ';
      //   row += counter + ' ';
      counter++;
    }
    console.log(row);
  }
}

// printNumberBox();

// console.log(12 + 12); // 24
// console.log('12' + 12); // 1212
// console.log(12 + '12'); // 1212
// console.log(12 + '12' + '1'); // 12121
// console.log(1 + 12 + '12' + '1'); // 13121

// console.log('12' + '1' - 10 - '1');
// console.log('12' - 12);

// let alphabet = 'A';
// console.log(alphabet); // "A"
// // alphabet++
// alphabet = alphabet + 1;
// console.log(alphabet);

function printNumberBoxVertically(n) {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      line += i + j * n + 1 + ' ';
    }
    console.log(line);
  }
}

// printNumberBoxVertically(4);

/* 
a   b   c
d   e   f
g   h   i
*/

// console.log('a'.charCodeAt(0));
// console.log('b'.charCodeAt(0));
// console.log('c'.charCodeAt(0));

// console.log('hello'.charCodeAt(1));

// let number = 99;
// console.log(number);
// console.log(String.fromCharCode(number));

function printLetters(n) {
  let counter = 'A'.charCodeAt(0);
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      line += String.fromCharCode(counter) + ' ';
      counter++;
    }
    console.log(line);
  }
  console.log('===========================');
}

// printLetters(3);
// printLetters(4);

function printAlternate(n) {
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) line += '0 ';
      else line += '1 ';
    }
    console.log(line);
  }
  console.log('===========================');
}

// printAlternate(3);
// printAlternate(5);
//! tc == O(n^2)
//! sc == O(n^2) (string)
//! sc == O(n) ()

//! =========================================
/* 
* * *
- - -
* * *
*/
function printFirstAndLastRow(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1) arr.push('*');
      else arr.push('-');
    }
    console.log(arr.join(' '));
  }
  console.log('=============================');
}

// printFirstAndLastRow(3);
// printFirstAndLastRow(4);
// printFirstAndLastRow(8);

//! =========================================
/*
 * - *
 * - *
 * - *
 */
function printFirstAndLastCol(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j == 0 || j == n - 1) arr.push('*');
      else arr.push('-');
    }
    console.log(arr.join(' '));
  }
  console.log('=============================');
}

// printFirstAndLastCol(3);
// printFirstAndLastCol(6);

//! =========================================
/*
 * * *
 * - *
 * * *
 */
function printOuterLayer(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j == 0 || j == n - 1 || i == 0 || i == n - 1) arr.push('*');
      else arr.push('-');
    }
    console.log(arr.join(' '));
  }
  console.log('=============================');
}

// printOuterLayer(3);
// printOuterLayer(8);

//! =========================================
/* 
* - -
- * -
- - *
*/

//! =======================================
/* 
* - -
- * -
- - *
*/
function printPrimaryDiagonal(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i === j) arr.push('*');
      else arr.push('-');
    }
    console.log(arr.join(' '));
  }
}

// printPrimaryDiagonal(3);
// printPrimaryDiagonal(9);

//! =======================================
/* 
- - - *
- - * -
- * - -
* - - -
*/
function printSecondaryDiagonal(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i + j == n - 1) arr.push('*');
      else arr.push('-');
    }
    console.log(arr.join(' '));
  }
}

// printSecondaryDiagonal(4);
// printSecondaryDiagonal(8);

//! =======================================
/* 
* * * *
- - * -
- * - -
* * * *

*/
// to print letter "Z"
function printZ(n) {
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i + j == n - 1 || i == 0 || i == n - 1) arr.push('*');
      else arr.push('-');
    }
    console.log(arr.join(' '));
  }
}

// printZ(4);

//! =======================================
/*
 * * * * -
 * - - - *
 * * * * *
 * - - - *
 * * * * -
 */
function printB(n) {
  let mid = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j == 0 || j == n - 1 || i == 0 || i == n - 1 || i == mid) {
        if ((i == 0 && j == n - 1) || (i == n - 1 && j == n - 1)) arr.push('-');
        else arr.push('*');
      } else arr.push('-');
    }
    console.log(arr.join(' '));
  }
}

// printB(5);

//! ==================================================
/* 
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
*/
function printPascalTriangle(n) {
  let previousRow = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) arr.push(1);
      else arr.push(previousRow[j - 1] + previousRow[j]);
    }
    console.log(arr.join(' '));
    previousRow = arr;
  }
}

printPascalTriangle(8);
