let kavin=function(value){
    let array=[...Array(value).keys()];
    function primeNumbers(num){
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return num>1;
    }
    console.log(array.filter(primeNumbers));
}
kavin(10);

