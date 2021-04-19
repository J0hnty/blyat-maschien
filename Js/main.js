let display='0';
let operator=null;
let firstValue=null;
let secondValue=null;

myButton=document.querySelector('input');

let bodyElement=document.querySelector('body');
let jumbotronElement=document.querySelector('.jumbotron');
let displayElement=document.querySelector('.display');
let buttonsElement=document.querySelector('.buttons');

myButton.addEventListener("click", toggleDarkMode);
buttonsElement.addEventListener('click', handleClick);

function toggleDarkMode() {

    bodyElement.classList.toggle("dark-body");
    jumbotronElement.classList.toggle("dark-blue-background");
    displayElement.classList.toggle("dark-blue-background");
    

}

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
    }
    
}

function handleNumber(el) {

    let number=el.innerHTML;

    if(display==='0') {
        display=number;
        showDisplay();
        
    }else {
        display += number;
        showDisplay();
    }

}

function handleOperator(el) {
    firstValue=display;
    
    switch(operator)
    {
        case '+':
            operator='+';
            if (secondValue === '0') {
                display='0'
                handleNumber(el);

            }
            firstValue + secondValue;
            break;
        case '-':

            break;
        case '*':

            break;
        case '/':

            break;

    }

}

function dot() {
    if (!displayElement.innerHTML.includes('.')) {
        displayElement.innerHTML += '.';
    }
}

function clear() {
    displayElement.innerHTML = '0';
    display = '';
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

function showDisplay() {
    displayElement.innerHTML=display;
}
