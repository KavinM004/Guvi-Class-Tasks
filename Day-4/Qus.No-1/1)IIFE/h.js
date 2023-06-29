(function(){
    const rotateArray = (arr, k) => {
    if (k < 0 || k >= arr.length) {
      return arr;
    }
    for (let i = 0; i < k; i++) {
      let last = arr[arr.length - 1];
      for (let j = arr.length - 2; j >= 0; j--) {
        arr[j + 1] = arr[j];
      }
      arr[0] = last;
    }
    return arr;
  };
  const arr = [1, 2, 3, 4, 5, ];
  const k = 3;
  const rotatedArray = rotateArray(arr, k);
  console.log(rotatedArray);
})()