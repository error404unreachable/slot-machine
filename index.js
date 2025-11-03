//index.js
const machine = document.getElementById("machine");
const out = document.getElementById("out");
let money = 0;
let multiplier = 1;

function addMoney() {
    money += (1 * multiplier);
    out.innerText = money;
    console.log(money);
}