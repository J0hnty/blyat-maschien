let display='0';
let operator='';
let firstValue='';
let secondValue='';
let number='';
let total=0;

let myButton=document.querySelector('input');
let bodyElement=document.querySelector('body');
let jumbotronElement=document.querySelector('.jumbotron');
let displayElement=document.querySelector('.display');
let buttonsElement=document.querySelector('.buttons');

myButton.addEventListener("click", toggleDarkMode);
buttonsElement.addEventListener('click', handleClick);

function handleClick(event) {

    const element=event.target;
    
    switch(element.className)
    {
        case 'btn-number':
            handleNumber(element);
            break;
        case 'btn-operator':
            handleOperator(element);
            break;
        case 'btn-clear':
            clear();
            break
        case 'btn-dot':
            dot();
            break
        case 'btn-equal':
            equals();
            break;
    }
    
}

function handleNumber(el) {

    number=el.innerHTML;

    if(display==='0') {
        display=number;
        showDisplay();
        
    }else {
        display += number;
        showDisplay();
    }
    console.log(display);
}

function handleOperator(el) {
    operator=el.innerHTML;
    firstValue=display;
    display='0';

    showDisplay();

    if (operator === 'x²') {  
        equals(operator);
    }
    console.log(operator);
}

function equals() {
    secondValue=display;
    display='0'
    
    console.log(firstValue);
    console.log(operator);
    console.log(secondValue);
    
    if (operator === '+') {
        total = parseFloat(firstValue) + parseFloat(secondValue);
    }else if (operator === '-') {
        total = parseFloat(firstValue) - parseFloat(secondValue);
    }else if (operator === 'x') {
        total = parseFloat(firstValue) * parseFloat(secondValue);
    }else if (operator === '/') {
        total = parseFloat(firstValue) / parseFloat(secondValue);
    }else if (operator === 'x²') {
        total = parseFloat(firstValue) * firstValue;
    }
    display=total;
    console.log(total);
    showDisplay();
}

function clear() {
    displayElement.innerHTML = '0';
    display = '0';
    console.log('display cleared');
}

function dot() {
    if (!displayElement.innerHTML.includes('.')) {
        display += '.';
        showDisplay();
    }

}

function handleEindSom() {
    let counter=0;
    let total=0;
    let price=0;
    let prices=[];
    while (counter<=prices.length) {
        price=parseInt(price[counter]);
        total+=price;
        counter++
    }
}

function toggleDarkMode() {

    bodyElement.classList.toggle("dark-body");
    jumbotronElement.classList.toggle("dark-blue-background");
    displayElement.classList.toggle("dark-blue-background");
    
}

function showDisplay() {
    displayElement.innerHTML=display;
}

