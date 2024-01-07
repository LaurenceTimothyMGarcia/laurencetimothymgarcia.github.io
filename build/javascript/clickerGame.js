// Little clicker game for 2990 to troll dr eger

var clickCount = 0;
var multiplier = 0;

const textFile = "../textFiles/dpsidleanalysis.txt";
var inputData = "";

async function readData() {
    const response = await fetch(textFile);
    inputData = await response.text();
    console.log(inputData);
}

readData();

const htmlBody = document.querySelector("#clicker-html");
const count = document.querySelector("#click-count");
const mult = document.querySelector("#click-mult");
const text = document.querySelector("#clicker-text");

htmlBody.addEventListener("click", function() {

    if (clickCount % 10 == 0) {
        multiplier += 1;
    }

    mult.textContent = "Multiplier: " + multiplier;

    for (let i = 0; i < multiplier; i++) {
        text.textContent += inputData.charAt(clickCount);
        count.textContent = "Click Count: " + clickCount;
        clickCount += 1;
    }
    
})