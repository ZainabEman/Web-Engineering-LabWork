//basic arthimatic functions
const plus = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';


//higher order function defdintion
const calculate = (num1, num2, operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
//iput validation
    if (isNaN(number1) || isNaN(number2)) {
        return 'Please enter valid numbers';
    }
    return operation(number1, number2);
};
const performOperations = (operator) => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    let result;

    switch (operator) {
        case '+':
            result = calculate(num1, num2, plus);
            break;
        case '-':
            result = calculate(num1, num2, minus);
            break;
        case '*':
            result = calculate(num1, num2, mul);
            break;
        case '/':
            result = calculate(num1, num2, div);
            break;
    }
    document.getElementById('result').innerText = result;
};
