(function(){
    let kavin=function(){
        const arr = ['carecar', 67547,'dad', 12321, 'mom', 'malayalam'];
    const isPalindrome = el => {
       const str = String(el);
       let i = 0;
       let j = str.length - 1;
       while(i < j) {
          if(str[i] === str[j]) {
             i++;
             j--;
          }
          else {
             return false;
          }
       }
       return true;
    };
    const findPalindrome = arr => {
       return arr.filter(el => isPalindrome(el));
    };
    console.log(findPalindrome(arr));
    }
    kavin();
})()