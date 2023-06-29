let array = ['carecar', 67547,'dad', 12321, 'mom', 'malayalam'];
let YesOrNo = array.filter(arr => {
  let len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] == arr[len - i - 1]) return true;
     else return false;   
  }
});
console.log(YesOrNo)