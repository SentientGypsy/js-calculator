let operandOne = 0;
let operandTwo = 0;
let operator = 0;
let display_field = document.querySelector("#number-display");

const zero_button = document.querySelector(".zero-button");
const one_button = document.querySelector(".one-button");
const two_button = document.querySelector(".two-button");
const three_button = document.querySelector(".three-button");
const four_button = document.querySelector(".four-button");
const five_button = document.querySelector(".five-button");
const six_button = document.querySelector(".six-button");
const seven_button = document.querySelector(".seven-button");
const eight_button = document.querySelector(".eight-button");
const nine_button = document.querySelector(".nine-button");


const plus_button = document.getElementById("plus-button")
const subtract_button = document.getElementById("subtract-button");
const multiply_button = document.getElementById("multiply-button");
const divide_button = document.getElementById("divide-button");
const equals_button = document.getElementById("equals-button");

let plusButtonState = false;
let subtractButtonState = false;
let multiplyButtonState = false;
let divideButtonState = false;
let arrayOfButtonStates = [plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState];
let arrayOfButtons = [plus_button, subtract_button, multiply_button, divide_button, equals_button];




equals_button.addEventListener("click", () => {
    display_field.value = "";
    let result = operate(operator, operandOne, operandTwo);
    display_field.value = result;
    operandOne = result;

    plus_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    subtract_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    multiply_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    divide_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
});


plus_button.addEventListener("click", () => {
    if (plusButtonState === false && operandOne !== NaN){
        plusButtonState = true;
        plus_button.style.border = "2px, solid, rgb(0,0,0,0.8)";
        display_field.value = "";
        operator = "+";

        subtractButtonState = false;
        multiplyButtonState = false;
        divideButtonState = false;

        subtract_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        multiply_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        divide_button.style.border = "1px, solid, rgb(0,0,0,0.8)";

    } else {
        plusButtonState = false;
        plus_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    }


});
subtract_button.addEventListener("click", () => {
    if (subtractButtonState === false && operandOne !== NaN){
        subtractButtonState = true;
        subtract_button.style.border = "2px, solid, rgb(0,0,0,0.8)";
        display_field.value = "";
        operator = "-"

        plusButtonState = false;
        multiplyButtonState = false;
        divideButtonState = false;

        plus_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        multiply_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        divide_button.style.border = "1px, solid, rgb(0,0,0,0.8)";


    } else {
        subtractButtonState = false;
        subtract_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    }


});

multiply_button.addEventListener("click", () => {
    if (multiplyButtonState === false && operandOne !== NaN){
        multiplyButtonState = true;
        multiply_button.style.border = "2px, solid, rgb(0,0,0,0.8)";
        display_field.value = "";
        operator = "*"

        plusButtonState = false;
        subtractButtonState = false;
        divideButtonState = false;

        plus_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        subtract_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        divide_button.style.border = "1px, solid, rgb(0,0,0,0.8)";


    } else {
        multiplyButtonState = false;
        multiply_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    }


});

divide_button.addEventListener("click", () => {
    if (divideButtonState === false && operandOne !== NaN){
        divideButtonState = true;
        divide_button.style.border = "2px, solid, rgb(0,0,0,0.8)";
        display_field.value = "";
        operator = "/"

        plusButtonState = false;
        subtractButtonState = false;
        multiplyButtonState = false;

        plus_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        subtract_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
        multiply_button.style.border = "1px, solid, rgb(0,0,0,0.8)";


    } else {
        divideButtonState = false;
        divide_button.style.border = "1px, solid, rgb(0,0,0,0.8)";
    }


});




zero_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 0;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 0;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});



one_button.addEventListener("click", () => {
    
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 1;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 1;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

two_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 2;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 2;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

three_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 3;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 3;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

four_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 4;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 4;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

five_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 5;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 5;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

six_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 6;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 6;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

seven_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 7;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 7;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

eight_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 8;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 8;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});

nine_button.addEventListener("click", () => {
    if ([plusButtonState, subtractButtonState, multiplyButtonState, divideButtonState].includes(true) && operandOne !== NaN){
        display_field.value += 9;
        operandTwo = display_field.value;
        console.log("operand two is -> " + operandTwo);

    } else {
        display_field.value += 9;
        operandOne = display_field.value
        console.log("operand one is -> " + operandOne);
    }
});


function add (numOne, numTwo){
    return +numOne + +numTwo;
}

function subtract (numOne, numTwo){
    return +numOne - +numTwo;
}

function multiply (numOne, numTwo){
    return +numOne * +numTwo;
}

function divide (numOne, numTwo){
    return +numOne / +numTwo;
}


function operate(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
            break;
        case "-":
            return subtract(numOne, numTwo);
            break;
        case "*":
            return multiply(numOne, numTwo);
            break;
        case "/":
            return divide(numOne, numTwo);
            break;

    }

}






console.log("add 4 + 8 -> " + add(4, 8));
console.log("subtract 4 - 8 -> " + subtract(4, 8));
console.log("multiply 4 * 8 -> " + multiply(4, 8));
console.log("divide 4 / 8 -> " + divide(4, 8));



