//Getting all the buttons from the calculator and assigning it to a variable
const reset = document.querySelector('.reset');
const plusMinus = document.querySelector('.plusMinus');
const percentage = document.querySelector('.percentage');
const operators = document.querySelectorAll('.operator')
const addition = document.querySelector('.addition');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const numberKeys = document.querySelectorAll('.numBtn')
const result = document.querySelector('#result')
let firstNum = '';
let secondNum = '';
let operator = '';
let total = '';

//Storing clicked number into variable
numberKeys.forEach((num) => num.addEventListener('click',function(){
    if(operator === ''){
        firstNum += num.textContent
        result.textContent = firstNum;
    } else{
        secondNum += num.textContent;
        result.textContent = secondNum;
    }
}));
operators.forEach((op) => op.addEventListener('click', function(){
    operator = op.textContent;
    result.textContent = operator;
}));
equal.addEventListener('click', function(){
    //Changes the string into a number used for calculation
   let num1 = parseFloat(firstNum) || 0;
   let num2 = parseFloat(secondNum) || 0;
   total = calculate(num1, operator, num2);
   result.textContent = total;

   //Allows user to continue adding numbers after calculation
   firstNum = total.toString();
   secondNum = '';
   operator = '';
});


// Creating the function for each math operator
addition.addEventListener('click', add);
function add(a,b){
    return a+b
}
subtract.addEventListener('click', subtract);
function subtraction(a,b){
    return a-b
}
multiply.addEventListener('click', multiply);
function multiplication(a,b){
    return a*b
}
divide.addEventListener('click', divide);
function division(a,b){
    if(b === 0){
        return 'KEKW.jpg'
    }
    return a/b
}

//Calculator operation
function calculate(firstNumber, operator, secondNumber) {
    let result;
    switch(operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtraction(firstNumber, secondNumber);
            break;
        case '/':
            result = division(firstNumber, secondNumber);
            break;
        case '*':
            result = multiplication(firstNumber, secondNumber);
            break;
        default:
            alert(operator + ' is not supported');
            break;
    }

    if (result !== 'undefined') {
        // update the HTML to show the result
    }
    return result;
}

reset.addEventListener('click', function(){
    firstNum = '';
    secondNum = '';
    operator = '';
    result.textContent = '0';
})
percentage.addEventListener('click', function(){
    let percent = parseFloat(result.textContent)/100;
    result.textContent = percent;
})
plusMinus.addEventListener('click', function(){
    let num = parseFloat(result.textContent);
    if(!isNaN(num)){
        num = num * -1;
        result.textContent = num;
        
        if(operator === ''){
            firstNum = num.toString();
        } else{
            secondNum = num.toString();
        }
    }

})