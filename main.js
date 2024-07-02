// initialize the buttons
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const mult = document.querySelector('.mult');
const divi = document.querySelector('.divi');
const dot = document.querySelector('.dot');

// initialize the screen
const para = document.querySelector('.upper');
const hisPara = document.querySelector('.history');
// initialize the value of the buttons
const wala = 0;
const isa = 1;
const dalawa = 2;
const tatlo = 3;
const apat = 4;
const lima = 5;
const anim = 6;
const pito = 7;
const walo = 8;
const syam = 9;
// initialize operators
const clear = document.querySelector('.clear');
const plus = '+';
const minus = '-';
const multiply = '*';
const divide = '/';
const dots = '.';
// initialize equal button
const equals = document.querySelector('.equals');
const btn = document.querySelectorAll('button');
// initialize the variable to be used
let firstNum;
let secondNum;
let operator;
btn.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('active');
        setTimeout(() => {
            element.classList.remove('active');
        }, 100);
    });
});

zero.addEventListener('click', () => {
    para.textContent += `${wala}`;    
});
one.addEventListener('click', () => {
    para.textContent += `${isa}`;    
});
two.addEventListener('click', () => {
    para.textContent += `${dalawa}`;    
});
three.addEventListener('click', () => {
    para.textContent += `${tatlo}`;    
});
four.addEventListener('click', () => {
    para.textContent += `${apat}`;    
});
five.addEventListener('click', () => {
    para.textContent += `${lima}`;    
});
six.addEventListener('click', () => {
    para.textContent += `${anim}`;    
});
seven.addEventListener('click', () => {
    para.textContent += `${pito}`;    
});
eight.addEventListener('click', () => {
    para.textContent += `${walo}`;    
});
nine.addEventListener('click', () => {
    para.textContent += `${syam}`;    
});
add.addEventListener('click', () => {
    para.textContent += ` ${plus} `;
});
sub.addEventListener('click', () => {
    para.textContent += ` ${minus} `;
});
mult.addEventListener('click', () => {
    para.textContent += ` ${multiply} `;
});
divi.addEventListener('click', () => {
    para.textContent += ` ${divide} `;
});
dot.addEventListener('click', () => {
    para.textContent += `${dots}`;
})
equals.addEventListener('click', () => {
    let param = para.textContent;
    return equal(param);
});

function equal(param){
    let array1 = param.split(' ');
    firstNum = array1[0];
    operator = array1[1];
    secondNum = array1[2];
    switch(operator){
        case '+':
            para.textContent = `${addition(firstNum, secondNum)}`;
            hisPara.textContent = `${firstNum} + ${secondNum}`
            break;
        case '-':
            para.textContent = `${subtraction(firstNum, secondNum)}`;
            hisPara.textContent = `${firstNum} - ${secondNum}`
            break;
        case '*':
            para.textContent = `${multiplication(firstNum, secondNum)}`;
            hisPara.textContent = `${firstNum} * ${secondNum}`
            break;
        case '/':
            para.textContent = `${division(firstNum, secondNum)}`;
            hisPara.textContent = `${firstNum} / ${secondNum}`
            break;
        default:
            "ERROR!";
    }
};
function addition(a, b){
    return +a + +b;
};
function subtraction(a, b){
    return a - b;
};
function multiplication(a, b){
    return a * b;
};
function division(a, b){
    return a / b;
};

clear.addEventListener('click', () => {
    para.textContent = '';
    hisPara.textContent = '';
})