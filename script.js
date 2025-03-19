const welcomeMessage = document.getElementById('welcome-message');
const messageContainer = document.getElementById('container');
const closeBtn = document.getElementById('close');
const varsContainer = document.getElementById('vars');
const voteAge = document.getElementById('age');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('age-result')
const countingResult = document.getElementById('count');
const countBtn = document.getElementById('count-btn');
const sumLoop = document.getElementById('sum-loop')
const dialog = document.querySelector('dialog');
const colourBtn = document.querySelector('#colour-btn');
const dialogBtn = document.querySelector('dialog button');
const colourValue = document.querySelector('#colour-input');
const colours = document.getElementById('colours')


console.log("Hello World!");

//welcome message
welcomeMessage.innerText = 'Welcome to JavaScript !';

//variables to display on the webpage
let num = 0;
const stringValue = 'This is a test string.'
var isOk = true;

// display variables in div elements
function displayVars (...vars) {
    for (let variable of vars) {
        const container = document.createElement('div');
        container.innerHTML = variable;
        container.classList.add('varDisplay');
        varsContainer.appendChild(container);        
    }
};

// age var and string 
let age = 35;
let ageString = String(age);
// call to display variables on the webpage
displayVars(num, stringValue, isOk, age, ageString)
//check elgibility to vote.
const checkAge = (ageToCheck) => {
        result.textContent = ageToCheck >= 18 ? 'You are eligible to vote' 
            : 'You are not eligible to vote';
};
// count from 1 to 10
const countTo10 = () => {
    countingResult.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        displayNum(i, countingResult);
    }
}
//display numbers on the webpage, each of them in random colour
const displayNum = (num, parent) => {
    let numPara = document.createElement('span');
    numPara.textContent = num;
// generate random colour
    numPara.style.color = `rgb(${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)})`;
    numPara.style.margin = '10px';
    parent.appendChild(numPara);
};
// sum numbers from 1 to 100
const sumNums = (start, end) => {
    sum = 0
    for (let i = start; i <= end; i++){
        sum += i;
    }
    sumLoop.textContent = sum
}
sumNums(1, 100);
//Array of fruits and array methods
fruits = ['apple', 'banana', 'watermelon', 'pineapple', 'orange']
fruits.push('tomato');
fruits.shift()
console.log(fruits)



//button to close welcoming message.
closeBtn.addEventListener('click', () => {
    messageContainer.style.display = 'none';   
});
// form to check voting eligibility.
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkAge(voteAge.value);
});

// count to 10 on the webpage.
countBtn.addEventListener('click', countTo10);

//open prompt
colourBtn.addEventListener('click', () => {
    dialog.showModal();
});
//close prompt and display colour of chose in that colour. 
dialogBtn.addEventListener('click', () => { 
    colours.innerHTML = ''
    colour = document.createElement('p')
    colValue = colourValue.value;
    if (colValue) {
        colour.textContent = `Your favorite colour is ${colourValue.value}`;
        colour.style.color = `${colourValue.value}`;
    } else {
        colour.textContent = `You didn't choose a colour!`;
    }
    colours.appendChild(colour);  
    dialog.close();
})
