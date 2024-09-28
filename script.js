let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (error) {
        display.value = 'Error';  // Display error for invalid expressions
    }
}
