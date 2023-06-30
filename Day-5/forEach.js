let k='{"MyName":"Kavin M","Age":21,"Blood":"B+ve"}';
    let a=JSON.parse(k);
let array=Object.entries(a);
array.forEach(e=>{
    console.log(e);
})

/*let person={
    fn:'john',
    ln:'kumar'
};
let entries=Object.entries(person);
let kar=entries.join(":");
console.log(kar+" ");*/
//entries.forEach(e=>{
  //  console.log(e);
//})