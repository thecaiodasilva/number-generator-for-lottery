let a;
let b;
let c;
let d;
let e;
let f;

document.getElementById('rollButton').onclick = function(){

    a =Math.floor(Math.random() * 60) + 1;
    b =Math.floor(Math.random() * 60) + 1;
    c =Math.floor(Math.random() * 60) + 1;
    d =Math.floor(Math.random() * 60) + 1;
    e =Math.floor(Math.random() * 60) + 1;
    f =Math.floor(Math.random() * 60) + 1;

    document.getElementById("sorte1").innerHTML = a;
    document.getElementById("sorte2").innerHTML = b;
    document.getElementById("sorte3").innerHTML = c;
    document.getElementById("sorte4").innerHTML = d;
    document.getElementById("sorte5").innerHTML = e;
    document.getElementById("sorte6").innerHTML = f;  
}

