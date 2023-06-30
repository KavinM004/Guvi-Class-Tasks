let kavin=function(){
    let k='{"MyName":"Kavin M","Age":21,"Blood":"B+ve"}';
    let a=JSON.parse(k);
let array=Object.entries(a);
for(let key of array){
    let kar=array[key];
    console.log(key);
}
}
kavin();