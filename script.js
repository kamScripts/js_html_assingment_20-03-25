const welcomeMessage = document.getElementById('welcome-message')
const messageContainer = document.getElementById('container')
const closeBtn = document.getElementById('close')
const varsContainer = document.getElementById('vars')

console.log("Hello World!");

welcomeMessage.innerText = 'Welcome to JavaScript !';

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

}


let age = 35;
let ageString = String(age);

displayVars(num, stringValue, isOk, age, ageString)



closeBtn.addEventListener("click", () => {
    messageContainer.style.display = 'none';   
});