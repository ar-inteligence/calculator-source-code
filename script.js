let display = document.getElementById('display');
let memoryValue = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function memoryRecall() {
    display.value += memoryValue;
}

function memoryClear() {
    memoryValue = 0;
}

function memoryAdd() {
    try {
        memoryValue += eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function memorySubtract() {
    try {
        memoryValue -= eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
