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
    document.getElementById("slo1").innerText = x;
    let y = Math.floor(Math.random() * 7);
    console.log(y);
    document.getElementById("slo1").innerText = y;
    let z = Math.floor(Math.random() * 7);
    console.log(z);
    document.getElementById("slo1").innerText = z;
}