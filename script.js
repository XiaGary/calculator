//Getting all the buttons from the calculator and assigning it to a variable
const reset = document.querySelector('.reset');
const plusMinus = document.querySelector('.plusMinus');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const addition = document.querySelector('.addition');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const numberKeys = document.querySelectorAll('.numBtn')

//Creating eventListeners for each number and storing the value
let firstNum = function(){
    if(one.onclick){
        return console.log(1);
    }
}

//Creating the function for each math operator
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
        return 'Error'
    }
    return a/b
}