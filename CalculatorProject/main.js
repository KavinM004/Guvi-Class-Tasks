let Display=document.getElementById("display");
function display(num){
    Display.value+=num;
}
function Calculate(){
    try{
        Display.value=eval(Display.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    Display.value=" ";
}
function del(){
    Display.value=Display.value.slice(0,-1);
}