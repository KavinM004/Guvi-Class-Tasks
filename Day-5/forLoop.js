let kavin= () => {
    let k='{"MyName":"Kavin M","Age":21,"Blood":"B+ve"}';
    let a=JSON.parse(k);
    let aKeys=Object.keys(a);
    for(let i=0;i<aKeys.length;i++){
    console.log(aKeys[i]+" "+":"+" "+a[aKeys[i]]);
    }
}
kavin();