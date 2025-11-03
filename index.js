//index.js
const machine = document.getElementById("machine");
const out = document.getElementById("out");
let money = 0;

function addMoney() {
    money += 1;
    out.innerText = money;
    console.log(money);
}