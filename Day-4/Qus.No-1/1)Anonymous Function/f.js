let kavin=function(){
    function findMedian(a1, a2, n) {
        let j = 0;
        let i = n - 1;
        while (a1[i] > a2[j] && j < n && i > -1) {
          const temp = a1[i];
          a1[i] = a2[j];
          a2[j] = temp;
          i--;
          j++;
        }
        a1.sort();
        a2.sort();
        if (n % 2 === 0) {
          return (a1[n - 1] + a2[0]) / 2;
        } else {
          return a1[n - 1];
        }
      }
      const a1 = [1, 2, 3, 6];
      const a2 = [4, 6, 8, 10];
      const median = findMedian(a1, a2, a1.length);
      console.log( median);
}
kavin();