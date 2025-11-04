//index.js
const machine = document.getElementById("machine");
const out = document.getElementById("out");
let money = 0;

function addMoney() {
    try {
        money++;
        out.innerText = "$ " + money;
    } catch (e) {
        console.log(e);
    }
}

function spin() {
    let x = Math.floor(Math.random() * 7);
    console.log(x);
    let y = Math.floor(Math.random() * 7);
    console.log(y);
    let z = Math.floor(Math.random() * 7);
    console.log(z);
}