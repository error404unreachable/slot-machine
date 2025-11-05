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

function generateRandVals() {
    x = Math.floor(Math.random() * 7);
    console.log(x);
    y = Math.floor(Math.random() * 7);
    console.log(y);
    z = Math.floor(Math.random() * 7);
    console.log(z);
    return [x, y, z];
}

async function spin() {
    let randVals = await generateRandVals(); 
    document.getElementById("slo1").innerText = randVals[0];
    document.getElementById("slo1").innerText = randVals[1];
    document.getElementById("slo1").innerText = randVals[2];
}
