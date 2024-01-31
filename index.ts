import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void {

    const firstString: string = question('Enter first num: ');
    const operator: string = question('Enter operator: ');
    const secondString: string = question('Enter second num: ');

    const validInput: boolean = isNumber(firstString) && isOperator(operator) && isNumber(secondString);

    if (validInput) {
        const firstNum: number = parseInt(firstString);
        const secondNum: number = parseInt(secondString);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result);
    } else {
        main();
    }

}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
    switch(operator) {
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

function isOperator(operator: string) : boolean {
    switch(operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(string: string) : boolean {
    const maybeNum = parseInt(string);
    const isNum : boolean = !isNaN(maybeNum);
    return isNum;
}

main();