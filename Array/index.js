// Reverse the array!!

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
  return newArr;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

// Find the maximum and minimum element in an array!!

function findMinAndMaxFromArray(arr) {
  let min = arr[0],
    max = arr[0]; //default value
  for (let i = 0; i <= arr.length - 1; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("min", min, "max", max);
}
// findMinAndMaxFromArray([0, 1, 2, 3, 4, 5]);







// Find the "Kth" max and min element of an array 
function bubbleSortFunction(arr,k) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("kth min", arr[k-1], "kth max", arr[arr.length-k])
}

// bubbleSortFunction([40, 30, 12, 25,4],2);

