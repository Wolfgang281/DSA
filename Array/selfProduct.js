let arr = [1, 4, 2, 5, 10];
//? let result = [400, 100, 200, 80, 40];

function selfProductBrute(arr) {
  let result = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product = product * arr[j];
      }
    }
    result.push(product);
  }
  console.log(result);
}
// selfProductBrute(arr);
//! tc --> O(n^2)
//! sc --> O(n)

function selfProduct(arr) {
  let n = arr.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    prefix[i] = arr[i] * prefix[i - 1];
  }
}

selfProduct(arr);
