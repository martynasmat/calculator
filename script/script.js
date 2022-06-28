const currentValueElement = document.querySelector(".current-value");
const previousValueElement = document.querySelector(".previous-value");

function addFunction(num1, num2) {
    if(num1 === "") {
        num1 = 0;
    };
    if(num2 === "") {
        num2 = 0;
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
        num2 = 0;
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
        num2 = 1;
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
        num2 = 1;
    };
    num1 = Number(num1);
    num2 = Number(num2);
    return (num1 / num2);
};

function numberButtonClick(arg) {
    if(currentValueElement.textContent.length < 16){
        currentValueElement.textContent += arg;
    };
};

function functionButtonClick(arg) {
    if(previousValueElement.textContent !== "" || currentValueElement.textContent !== "") {
        if(previousValueElement.textContent === "") {
            previousValueElement.textContent = `${currentValueElement.textContent} ${arg}`;
            currentValueElement.textContent = "";
        }else {
            previousValueElement.textContent = `${previousValueElement.textContent.split(' ')[0]} ${arg}`;
        };
    };
};

function equalsButtonClick() {
    num1 = previousValueElement.textContent.split(' ')[0];
    func = previousValueElement.textContent.split(' ')[1];
    num2 = currentValueElement.textContent;
    previousValueElement.textContent = "";
    let result = mathFunctions[func](num1, num2);
    result = Math.round(result * 10000000000000) / 10000000000000;
    if(String(result).length < 16) {
        currentValueElement.textContent = result;
    }else {
        currentValueElement.textContent = result.toExponential(12);
        console.log(currentValueElement.textContent);
    };
};

const mathFunctions = {
    "+": addFunction,
    "-": subtractFunction,
    "*": multiplyFunction,
    "/": divideFunction,
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