let display = document.getElementById('display');

function input(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value.includes('%')) {
            let [operand, percentage] = display.value.split('%');
            display.value = (parseFloat(operand) * parseFloat(percentage)) / 100;
        } else {
            display.value = eval(display.value);
        }
    } catch (e) {
        display.value = 'Error';
    }
}
