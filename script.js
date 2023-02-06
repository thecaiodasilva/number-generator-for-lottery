let numbers = [];

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (numbers.includes(randomNumber)) {
        return getRandomNumber();
    }
    numbers.push(randomNumber);
    return randomNumber;
}

document.getElementById('rollButton').onclick = function() {
    numbers = [];

    let a = getRandomNumber();
    let b = getRandomNumber();
    let c = getRandomNumber();
    let d = getRandomNumber();
    let e = getRandomNumber();
    let f = getRandomNumber();

    document.getElementById("sorte1").innerHTML = a;
    document.getElementById("sorte2").innerHTML = b;
    document.getElementById("sorte3").innerHTML = c;
    document.getElementById("sorte4").innerHTML = d;
    document.getElementById("sorte5").innerHTML = e;
    document.getElementById("sorte6").innerHTML = f;  
};
