let kavin=()=>{
    let array=["hi!","kavin",",","welcome","to","vs","code."];
    array.forEach((word,index)=>{
        let firstLetter = word.charAt(0).toUpperCase();
        let kar = word.slice(1).toLowerCase();
        array[index]=firstLetter+kar;
    });
    console.log(array);
}
kavin();