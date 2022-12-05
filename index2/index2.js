const wrapper = document.querySelector('.messages');
const btn = document.querySelector('.btn');
const input = document.querySelector('.comment-sender');

let spam = ['viagra'];

btn.addEventListener('click', bipbip);

function bipbip() {
const value = input.value;

const valueToLowerCase = value.toLowerCase();

for (let i = 0; i < spam.length; i++){
    if(valueToLowerCase.includes(spam[i])) {
        newValue = valueToLowerCase.replaceAll(spam[i], '***');
    }
}

let capital = newValue.charAt(0).toUpperCase() + newValue.slice(1);

const paragraph = document.createElement('p');

paragraph.textContent = capital;

wrapper.appendChild(paragraph);
}