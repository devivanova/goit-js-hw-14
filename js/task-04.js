let counterValue = 0;

const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;


const spanValueRef = document.getElementById('value');

const showCurrentValue = (counterValue) => spanValueRef.textContent = counterValue;

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick(event) {
    increment();
    showCurrentValue(counterValue);
}

function onDecrementBtnClick(event) {
    decrement();
    showCurrentValue(counterValue);
}