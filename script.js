//Getting all the buttons from the calculator and assigning it to a variable
const reset = document.querySelector('.reset');
const plusMinus = document.querySelector('.plusMinus');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiply = document.querySelector('.multiply');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const subtract = document.querySelector('.subtract');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const addition = document.querySelector('.addition');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');

//Creating eventListeners for each number and storing the value
zero.addEventListener('click', () => {
    const numberZero = 0;
    return numberZero;
});
one.addEventListener('click', () => {
    const numberOne = 1;
    return numberOne;
});
two.addEventListener('click', () => {
    const numberTwo = 2;
    return numberTwo;
});
three.addEventListener('click', () => {
    const numberThree = 3;
    return numberThree;
});
four.addEventListener('click', () => {
    const numberFour = 4;
    return numberFour;
});
five.addEventListener('click', () => {
    const numberFive = 5;
    return numberFive;
});
six.addEventListener('click', () => {
    const numberSix = 6;
    return numberSix;
});
seven.addEventListener('click', () => {
    const numberSeven = 7;
    return numberSeven;
});
eight.addEventListener('click', () => {
    const numberEight = 8;
    return numberEight;
});
nine.addEventListener('click', () => {
    const numberNine = 9;
    return numberNine;
});

//Creating the function for each math operator
addition.addEventListener('click', add);
function add(a,b){
    return a + b;
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
    return a/b
}