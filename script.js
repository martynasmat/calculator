const currentValueElement = document.querySelector(".current-value");
const previousValueElement = document.querySelector(".previous-value");
const mathFunctions = {
    "+": addFunction,
    "-": subtractFunction,
    "*": multiplyFunction,
    "/": divideFunction,
};

function addFunction(num1, num2) {
    if(num1 === "") {
        num1 = 0;
    };
    if(num2 === "") {
        num1 = 0;
    };
    num1 = Number(num1);
    num2 = Number(num2);
    return (num1 + num2);
};

function subtractFunction(num1, num2) {
    if(num1 === "") {
        num1 = 0;
    };
    if(num2 === "") {
        num1 = 0;
    };
    num1 = Number(num1);
    num2 = Number(num2);
    return (num1 - num2);
};

function multiplyFunction(num1, num2) {
    if(num1 === "") {
        num1 = 1;
    };
    if(num2 === "") {
        num1 = 1;
    };
    num1 = Number(num1);
    num2 = Number(num2);
    return (num1 * num2);
};

function divideFunction(num1, num2) {
    if(num1 === "") {
        num1 = 1;
    };
    if(num2 === "") {
        num1 = 1;
    };
    num1 = Number(num1);
    num2 = Number(num2);
    return (num1 / num2);
};

function numberButtonClick(arg) {
    currentValueElement.textContent += arg;
};

function functionButtonClick(arg) {
    if(previousValueElement.textContent === "") {
        previousValueElement.textContent = `${currentValueElement.textContent} ${arg}`;
        currentValueElement.textContent = "";
    }else {
        previousValueElement.textContent = `${previousValueElement.textContent.split(' ')[0]} ${arg}`;
    };
};

function equalsButtonClick() {
    num1 = previousValueElement.textContent.split(' ')[0];
    func = previousValueElement.textContent.split(' ')[1];
    num2 = currentValueElement.textContent;
    previousValueElement.textContent = "";
    currentValueElement.textContent = mathFunctions[func](num1, num2);
};

const numberButtonArray = Array.from(document.querySelectorAll(".number-button"));
numberButtonArray.forEach(button => button.addEventListener("click", function(evt) {
    evt.arg = evt.target.value;
        numberButtonClick(evt.arg);
    })
);

const functionButtonArray = Array.from(document.querySelectorAll(".function-button"));
functionButtonArray.forEach(button => button.addEventListener("click", function(evt) {
        evt.arg = evt.target.value;
        functionButtonClick(evt.arg);
    })
);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    currentValueElement.textContent = "";
    previousValueElement.textContent = "";
});

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", function() {
    currentValueElement.textContent = currentValueElement.textContent.slice(0, -1);
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", equalsButtonClick);