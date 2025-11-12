let arr = [5, 4, 5, 1, 6, 6, 2, 2, 5, 10]; //? 36
//? find equilibrium index --> sum of left elements is equal to sum of right elements

//? leftSum + currEle + leftSum = totalSum
//? leftSum  = totalSum - currEle - leftSum {return i}
//? leftSum += currEle

function findEquilibriumIndex(arr) {
  let totalSum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currEle = arr[i];
    if (leftSum === totalSum - currEle - leftSum) return i;
    leftSum += currEle;
  }
  return -1;
}

console.log(findEquilibriumIndex(arr));
