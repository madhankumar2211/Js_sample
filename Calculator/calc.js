function num(n){
    document.getElementById("result").value+=n;
}

function res(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value=y;
    
}

function clr(){
    document.getElementById("result").value="";
}