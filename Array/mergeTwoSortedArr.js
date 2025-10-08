function mergeTwoSortedArr(arr1, arr2) {
  let n = arr1.length, //? -->  i is pointing to arr1 with length n
    m = arr2.length; //? j is pointing to arr2 with length m
  let result = [];
  let k = 0;

  let i = 0,
    j = 0;

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      k++;
      i++;
    } else {
      result[k] = arr2[j];
      k++;
      j++;
    }
  }
  //! remaining elements of arr1
  while (i < n) {
    result[k] = arr1[i];
    k++;
    i++;
  }
  //! remaining elements of arr2
  while (j < m) {
    result[k] = arr2[j];
    k++;
    j++;
  }

  console.log(result);
}

mergeTwoSortedArr(arr1, arr2);

//? [1,5,8,12,13,23,30,67]
