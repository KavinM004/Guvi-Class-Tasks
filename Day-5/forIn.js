(function kavin(){
 let k='{"MyName":"Kavin M","Age":21,"Blood":"B+ve"}';
 let a=JSON.parse(k);
 for(let key in a){
    let kar=a[key];
    console.log(key+" "+":"+" "+kar);
 }
})()  