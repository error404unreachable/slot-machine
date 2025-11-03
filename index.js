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