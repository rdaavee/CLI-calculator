"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)('Enter first num: ');
    var operator = (0, readline_sync_1.question)('Enter operator: ');
    var secondString = (0, readline_sync_1.question)('Enter second num: ');
    var validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    if (validInput) {
        var firstNum = parseInt(firstString);
        var secondNum = parseInt(secondString);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(string) {
    var maybeNum = parseInt(string);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
