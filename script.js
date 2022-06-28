let currentValueText = "";
const currentValueElement = document.querySelector(".current-value");
const previousValueElement = document.querySelector(".previous-value");

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", function() {
    currentValueElement.textContent += "0"; 
});
const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", function() {
    currentValueElement.textContent += "1";
});
const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", function() {
    currentValueElement.textContent += "2";
});
const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", function() {
    currentValueElement.textContent += "3";
});
const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", function() {
    currentValueElement.textContent += "4";
});
const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", function() {
    currentValueElement.textContent += "5";
});
const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", function() {
    currentValueElement.textContent += "6";
});
const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", function() {
    currentValueElement.textContent += "7";
});
const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", function() {
    currentValueElement.textContent += "8";
});
const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", function() {
    currentValueElement.textContent += "9";
});
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    currentValueElement.textContent = "";
    currentValueText = "";
    previousValueElement.textContent = "";
});
const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", function() {
    currentValueElement.textContent = currentValueElement.textContent.slice(0, -1);
    currentValueText = currentValueText.slice(0, -1);
});